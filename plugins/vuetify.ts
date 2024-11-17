// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";
import { md2 } from "vuetify/blueprints";

export default defineNuxtPlugin((app) => {
  const customTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: "#1976D2",
      secondary: "#424242",
      accent: "#82B1FF",
      error: "#FF5252",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  };
  const vuetify = createVuetify({
    ssr: true,
    blueprint: md2,
    theme: {
      defaultTheme: "customTheme",
      themes: {
        customTheme,
      },
    },
  });
  app.vueApp.use(vuetify);
});
