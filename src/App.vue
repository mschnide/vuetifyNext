<template>
  <v-app :theme="theme">
    <v-layout>
      <v-app-bar density="compact">
        <template v-slot:prepend>
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
        </template>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>
        <v-btn variant="text" icon="mdi-filter"></v-btn>
        <v-btn
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="onClick"
        >
        </v-btn>
        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-app-bar>

      <v-navigation-drawer width="72" v-model="drawer">
        <router-link to="/">Go to Home</router-link>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <v-app-bar height="48" elevation="0"></v-app-bar>

      <v-bottom-navigation>
        <v-btn value="recent">
          <v-icon>mdi-history</v-icon>
          Recent
        </v-btn>

        <v-btn value="favorites">
          <v-icon>mdi-heart</v-icon>
          Favorites
        </v-btn>

        <v-btn value="nearby">
          <v-icon>mdi-map-marker</v-icon>
          Nearby
        </v-btn>
      </v-bottom-navigation>

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>

    <v-footer>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>

        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>MSW</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const theme = ref("dark");

const drawer = ref(false);
const items = ref([
  {
    title: "Foo",
    value: "foo",
  },
  {
    title: "Bar",
    value: "bar",
  },
  {
    title: "Fizz",
    value: "fizz",
  },
  {
    title: "Buzz",
    value: "buzz",
  },
]);

const links = ref([
  "Home",
  "About Us",
  "Team",
  "Services",
  "Blog",
  "Contact Us",
]);

function onClick() {
  theme.value = theme.value === "light" ? "dark" : "light";
}
</script>
