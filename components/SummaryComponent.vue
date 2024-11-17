<template>
  <div>
    <div class="d-flex align-center pb-4">
      <v-card class="py-2 px-2 d-flex justify-center align-center">
        <v-btn-toggle v-model="toggle" color="primary">
          <v-btn value="current_year"> ปีปัจจุบัน </v-btn>
          <v-btn value="current_month">เดือนปัจจุบัน</v-btn>
          <v-btn value="yesterday">เมื่อวาน</v-btn>
          <v-btn value="today">วันนี้</v-btn>
          <v-btn value="specify">ระบุช่วงเวลาเอง</v-btn>
        </v-btn-toggle>
      </v-card>
      <v-spacer></v-spacer>
      <v-btn variant="outlined"
        ><v-icon class="mr-1">mdi-printer</v-icon> พิมพ์รายงาน</v-btn
      >
    </div>
    <v-card>
      <v-row class="bg-grey-lighten-2 px-4">
        <v-spacer></v-spacer>
        <v-col cols="4">
          <v-select
            v-model="category"
            label="หมวดหมู่"
            :items="['A', 'B', 'C', 'D', 'all']"
            variant="solo"
            class="mt-5"
            @change="handleChange"
          ></v-select>
        </v-col>
      </v-row>

      <v-data-table
        :headers="headers"
        :items="filteredDesserts"
        item-value="name"
      >
        <template
          v-slot:headers="{ columns, isSorted, getSortIcon, toggleSort }"
        >
          <tr>
            <template v-for="column in columns" :key="column.key">
              <th class="bg-grey-lighten-2">
                <span
                  class="mr-2 cursor-pointer"
                  @click="() => toggleSort(column)"
                  >{{ column.title }}</span
                >
                <template v-if="isSorted(column)">
                  <v-icon :icon="getSortIcon(column)"></v-icon>
                </template>
              </th>
            </template>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "SummaryComponent",
  data() {
    return {
      toggle: 0,
      category: "all",
      headers: [
        {
          title: "รายการสินค้าสต๊อก",
          align: "start",
          key: "stock",
          sortable: false,
          removable: false,
        },
        { title: "เพิ่มสต๊อก", key: "addStock", removable: true },
        { title: "ลดสต๊อก", key: "reduce", removable: true },
        { title: "ตัดใช้", key: "cut", removable: true },
        { title: "คงเหลือ", key: "balance", removable: true },
        { title: "หมวดหมู่", key: "unit", removable: true },
      ],
      desserts: [
        {
          stock: "ติดตั้งแอร์",
          addStock: 159,
          reduce: 6.0,
          cut: 24,
          balance: 4.0,
          unit: "A",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 237,
          reduce: 9.0,
          cut: 37,
          balance: 4.3,
          unit: "A",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 262,
          reduce: 16.0,
          cut: 23,
          balance: 6.0,
          unit: "B",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 305,
          reduce: 3.7,
          cut: 67,
          balance: 4.3,
          unit: "B",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 356,
          reduce: 16.0,
          cut: 49,
          protein: 3.9,
          unit: "C",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 375,
          reduce: 0.0,
          cut: 94,
          balance: 0.0,
          unit: "C",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 392,
          reduce: 0.2,
          cut: 98,
          balance: 0,
          unit: "D",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 408,
          reduce: 3.2,
          cut: 87,
          balance: 6.5,
          unit: "D",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 452,
          reduce: 25.0,
          cut: 51,
          balance: 4.9,
          unit: "A",
        },
        {
          stock: "ติดตั้งแอร์",
          addStock: 518,
          reduce: 26.0,
          cut: 65,
          balance: 7,
          unit: "B",
        },
      ],
    };
  },
  computed: {
    filteredDesserts() {
      if (this.category === "all") {
        return this.desserts;
      }
      return this.desserts.filter((dessert) => dessert.unit === this.category);
    },
  },
  methods: {
    handleChange(value) {
      this.category = value;
    },
  },
};
</script>

<style></style>
