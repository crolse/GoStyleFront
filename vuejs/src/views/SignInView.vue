<template>
  <v-container class="container">
    <div>
      <v-img :src="require('../assets/logo.png')" class="logo" />
    </div>
    <SignIn />
  </v-container>
</template>

<script>
import SignIn from "@/components/authentication/SignIn";

export default {
  name: "SignInView",
  components: {
    SignIn
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid red; */
  height: 100vh;
}
.logo {
  width: 150px;
}
</style>
