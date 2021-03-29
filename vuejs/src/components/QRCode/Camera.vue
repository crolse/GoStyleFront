<template>
  <qrcode-stream @init="onInit" @decode="onDecode" />
</template>

<script lang="ts">
export default {
  name: "Camera",
  data() {
    return {};
  },
  methods: {
    onDecode(decodedString) {
      console.log(`Code promo`, decodedString);
      console.log(`this.$store.state.user.id`, this.$store.state.user.token);

      this.$http
        .post("http://localhost:8080/api/promotion/add", {
          userId: this.$store.state.user.id,
          codePromo: decodedString,
        })
        .then((response) => {
          console.log("getPromo", response);
          if (response.status === 200) {
            this.$router.push("/ListPromo");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          console.log("ERROR: you need to grant camera access permisson");
        } else if (error.name === "NotFoundError") {
          console.log("ERROR: no camera on this device");
        } else if (error.name === "NotSupportedError") {
          console.log("ERROR: secure context required (HTTPS, localhost)");
        } else if (error.name === "NotReadableError") {
          console.log("ERROR: is the camera already in use?");
        } else if (error.name === "OverconstrainedError") {
          console.log("ERROR: installed cameras are not suitable");
        } else if (error.name === "StreamApiNotSupportedError") {
          console.log("ERROR: Stream API is not supported in this browser");
        }
      }
    },
  },
};
</script>
