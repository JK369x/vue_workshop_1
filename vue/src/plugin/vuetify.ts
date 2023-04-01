import "vuetify/styles";
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
// make sure to also import the coresponding css
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files
const myAllBlackTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#000000",
        surface: "#000000",
        primary: "#000000",
        "primary-darken-1": "#000000",
        secondary: "#000000",
        "secondary-darken-1": "#000000",
        error: "#000000",
        info: "#000000",
        success: "#000000",
        warning: "#000000",
    },
};

export const vuetify = createVuetify({
    theme: {
        defaultTheme: "myAllBlackTheme",
        themes: {
            myAllBlackTheme,
        },
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
            fa,
        },
    },
    components,
    directives,
});
