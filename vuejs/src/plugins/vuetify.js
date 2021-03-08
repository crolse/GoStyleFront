import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#e63946",
        secondary: "#457b9d",
        success: "#90be6d",
        error: "#d90429",
        warning: "#ffbe0b",
      },
    },
  },
});
