<template>
  <v-bottom-navigation v-model="value" app color="deep-purple accent-4" grow>
    <v-btn value="list" @click="$router.push('/ListPromo')">
      <span>Liste</span>

      <v-icon>mdi-format-list-bulleted</v-icon>
    </v-btn>

    <v-btn value="qrcode" @click="$router.push('/QRCode')">
      <span>QR code</span>

      <v-icon>mdi-qrcode-scan</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomBar",
  data: () => ({ value: "list" }),
};
</script>
