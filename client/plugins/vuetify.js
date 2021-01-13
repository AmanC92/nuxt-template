// Vuetify Documentation https://vuetifyjs.com

import Vue from "vue";
import { VCol, VRow } from "vuetify/lib";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify, {
  components: {
    VCol,
    VRow,
  },
});

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#42a5f6",
        secondary: "#050b1f",
        accent: "#204165",
      },
      dark: {},
    },
  },
});
