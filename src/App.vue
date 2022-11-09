<template>
  <v-app>
    <v-layout>
    <v-app-bar height="22" color="grey-darken-3" elevation="0"></v-app-bar>
    <v-navigation-drawer width="72" color="grey-darken-2" permanent></v-navigation-drawer>
    <v-navigation-drawer width="150" color="grey-darken-1" permanent></v-navigation-drawer>
    <v-app-bar height="48" color="grey" elevation="0"></v-app-bar>
    <v-navigation-drawer location="right" width="150" color="grey-lighten-1" permanent></v-navigation-drawer>
    <v-app-bar location="bottom" height="48" color="grey-lighten-2" elevation="0"></v-app-bar>
    <v-main>
      <HelloWorld />
      <v-card elevation="0" height="400px"></v-card>
    </v-main>
  </v-layout>
  </v-app>
</template>

<script setup lang="ts">
  import HelloWorld from '@/components/HelloWorld.vue'
</script>
