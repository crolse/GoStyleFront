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
      console.log(`result`, decodedString);
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
