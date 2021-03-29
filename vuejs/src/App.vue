<template>
  <v-app>
    <HeaderBar v-if="logedIn" />
    <v-main>
      <router-view />
    </v-main>
    <BottomBar v-if="logedIn" />
  </v-app>
</template>

<script>
import BottomBar from "./components/BottomBar";
import HeaderBar from "./components/HeaderBar";
export default {
  name: "App",
  components: {
    BottomBar,
    HeaderBar,
  },
  data: () => ({
    logedIn: true,
  }),
};
</script>
