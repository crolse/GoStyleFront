<template>
  <v-app-bar color="deep-purple accent-4" app>
    <v-img
      class="mx-2 "
      :src="require('../assets/logo.png')"
      max-height="40"
      max-width="40"
      contain
    />

    <v-btn icon class="ml-auto">
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
export default {
  name: "HeaderBar",
  components: {},
  props: {
    title: String,
  },
};
</script>

<style scoped>
.logo {
  height: 50px;
}
.logo-container {
  display: flex;
  justify-content: center;
  margin: 30px 0 20px 0;
}
</style>
