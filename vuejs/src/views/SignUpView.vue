<template>
  <v-container class="container">
    <div>
      <v-img :src="require('../assets/Logo.png')" class="logo" />
    </div>
    <SignUp />
  </v-container>
</template>

<script>
import SignUp from "@/components/authentication/SignUp";

export default {
  name: "SignUpView",
  components: {
    SignUp,
  },
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
