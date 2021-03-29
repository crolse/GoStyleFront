<template>
  <v-app>
    <HeaderBar v-if="isConnected" />
    <v-main>
      <router-view />
    </v-main>
    <BottomBar v-if="isConnected" />
  </v-app>
</template>

<script>
import BottomBar from "./components/BottomBar";
import HeaderBar from "./components/HeaderBar";
export default {
  name: "App",
  components: {
    BottomBar,
    HeaderBar
  },
  data: () => ({}),
  computed: {
    isConnected() {
      return this.$store.state.user.token;
    }
  }
};
</script>
