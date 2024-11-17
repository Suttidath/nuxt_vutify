<template>
  <div class="theme bg-grey-lighten-4">
    <div class="bg-white">
      <v-container class="d-flex align-center">
        <v-btn prepend-icon="$prev" variant="outlined" @click="goBack"
          >กลับ</v-btn
        >
        <v-breadcrumbs
          color="primary"
          :items="['สรุปรายงาน', getTabName(tab)]"
        ></v-breadcrumbs>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <v-avatar>
            <v-img
              alt="John"
              src="https://randomuser.me/api/portraits/women/81.jpg"
            ></v-img>
          </v-avatar>
          <v-menu transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <v-btn
                append-icon="$subgroup"
                color="primary"
                variant="text"
                v-bind="props"
              >
                Username
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in username" :key="i">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            :icon="
              theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
            "
            @click="toggleTheme"
          />
        </div>
      </v-container>
    </div>

    <div class="bg-white">
      <v-container class="d-flex">
        <v-tabs v-model="tab" align-tabs="left">
          <v-tab :value="1">ภาพรวม</v-tab>
          <v-tab :value="2">รายการสินค้าสต๊อก</v-tab>
          <v-tab :value="3">หมวดหมู่</v-tab>
          <v-tab :value="4">ประวัติการทำรายการ</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <div class="d-flex align-center">
          <p class="mr-4">test pinia state counter: {{ count }}</p>
          <v-btn @click="increment">counter</v-btn>
        </div>
      </v-container>
    </div>
    <v-container>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item :value="1">
          <SummaryComponent />
        </v-tabs-window-item>
        <v-tabs-window-item :value="2">
          <ProductList />
        </v-tabs-window-item>
        <v-tabs-window-item :value="3">
          <h3 class="mb-2">หมวดหมู่</h3>
          <v-card>
            <v-data-table :items="items">
              <template v-slot:[`header.id`]="{ column }">
                {{ column.title.toUpperCase() }}
              </template>
            </v-data-table>
          </v-card>
        </v-tabs-window-item>
        <v-tabs-window-item :value="4">
          <h3 class="mb-2">ประวัติการทำรายการ</h3>
          <v-card>
            <v-data-table :items="items">
              <template v-slot:[`header.id`]="{ column }">
                {{ column.title.toUpperCase() }}
              </template>
            </v-data-table>
          </v-card>
        </v-tabs-window-item>
      </v-tabs-window>
    </v-container>
  </div>
</template>

<script>
import ProductList from "../components/productList";
import SummaryComponent from "../components/SummaryComponent";

import { useCounterStore } from "~/stores/user";

export default {
  name: "App",
  components: {
    SummaryComponent,
    ProductList,
  },
  setup() {
    const store = useCounterStore();
    const { increment, toggleTheme } = store;
    const count = computed(() => store.count);
    const theme = computed(() => store.theme);

    return { increment, count, theme, toggleTheme };
  },
  data: () => ({
    items: [
      {
        id: 1,
        name: "T-Shirt",
        size: "M",
        color: "Red",
        price: 19.99,
        quantity: "A",
      },
      {
        id: 2,
        name: "Jeans",
        size: "32",
        color: "Blue",
        price: 49.99,
        quantity: "A",
      },
      {
        id: 3,
        name: "Sweater",
        size: "L",
        color: "Green",
        price: 29.99,
        quantity: "B",
      },
      {
        id: 4,
        name: "Jacket",
        size: "XL",
        color: "Black",
        price: 89.99,
        quantity: "A",
      },
      {
        id: 5,
        name: "Socks",
        size: "One Size",
        color: "White",
        price: 9.99,
        quantity: "B",
      },
      {
        id: 6,
        name: "T-Shirt",
        size: "M",
        color: "Red",
        price: 19.99,
        quantity: "B",
      },
      {
        id: 7,
        name: "Jeans",
        size: "32",
        color: "Blue",
        price: 49.99,
        quantity: "C",
      },
      {
        id: 8,
        name: "Sweater",
        size: "L",
        color: "Green",
        price: 29.99,
        quantity: "C",
      },
      {
        id: 9,
        name: "Jacket",
        size: "XL",
        color: "Black",
        price: 89.99,
        quantity: "C",
      },
      {
        id: 10,
        name: "Socks",
        size: "One Size",
        color: "White",
        price: 9.99,
        quantity: "D",
      },
      {
        id: 11,
        name: "T-Shirt",
        size: "M",
        color: "Red",
        price: 19.99,
        quantity: "D",
      },
      {
        id: 12,
        name: "Jeans",
        size: "32",
        color: "Blue",
        price: 49.99,
        quantity: "D",
      },
      {
        id: 13,
        name: "Sweater",
        size: "L",
        color: "Green",
        price: 29.99,
        quantity: "A",
      },
      {
        id: 14,
        name: "Jacket",
        size: "XL",
        color: "Black",
        price: 89.99,
        quantity: "B",
      },
      {
        id: 15,
        name: "Socks",
        size: "One Size",
        color: "White",
        price: 9.99,
        quantity: "C",
      },
    ],
    username: [{ title: "My Profile" }, { title: "Logout" }],
    tab: 1,
  }),

  methods: {
    goBack() {
      this.$router.back();
    },
  },

  computed: {
    getTabName() {
      return (value) => {
        if (value === 1) return "ภาพรวม";
        else if (value === 2) return "รายการสินค้าสต๊อก";
        else if (value === 3) return "หมวดหมู่";
        else return "ประวัติการทำรายการ";
      };
    },
  },
};
</script>

<style></style>
