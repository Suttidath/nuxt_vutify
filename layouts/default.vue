<script>
import { useCounterStore } from "~/stores/user";

export default {
  setup() {
    const store = useCounterStore();
    const theme = computed(() => store.theme);

    return { theme };
  },
  data: () => ({
    saleMenu: [
      {
        title: "การขายหมวด1",
        to: "/sales",
        icon: "mdi-account",
      },
      {
        title: "การขายหมวด2",
        to: "/about",
        icon: "mdi-finance",
      },
    ],
  }),
};
</script>

<template>
  <div>
    <v-app theme="theme">
      <v-main>
        <V-navigation-drawer>
          <div class="logo">
            <img
              src="/images/teenaii.png"
              :width="120"
              aspect-ratio="16/9"
              cover
            />
          </div>

          <v-list density="compact" nav>
            <v-list-item
              :to="`/`"
              :active="$route.path === '/'"
              prepend-icon="mdi-home-city"
              title="สรุปรายงาน"
              value="home"
            ></v-list-item>

            <v-list-group value="sales">
              <template v-slot:activator="{ props }">
                <v-list-item
                  prepend-icon="mdi-sale"
                  v-bind="props"
                  title="การขาย"
                ></v-list-item>
              </template>

              <v-list-item
                v-for="(menu, i) in saleMenu"
                :key="i"
                :prepend-icon="menu.icon"
                :title="menu.title"
                :value="menu.title"
                :to="menu.to"
                :active="$route.path === menu.to"
              ></v-list-item>
            </v-list-group>

            <v-list-item
              :to="`/work_queue`"
              :active="$route.path === '/work_queue'"
              prepend-icon="mdi-account-group-outline"
              title="คิวงาน"
              value="work_queue"
            ></v-list-item>
            <v-list-item
              :to="`/finance`"
              :active="$route.path === '/finance'"
              prepend-icon="mdi-finance"
              title="กางเงิน"
              value="finance"
            ></v-list-item>
          </v-list>

          <template v-slot:append>
            <div class="pa-2">
              <v-btn prepend-icon="mdi-logout" block variant="text">
                ออกจากระบบ
              </v-btn>
            </div>
          </template>
        </V-navigation-drawer>
        <slot />
      </v-main>
    </v-app>
  </div>
</template>

<style>
.logo {
  width: "100%";
  display: flex;
  justify-content: center;
}
</style>
