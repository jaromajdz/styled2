import { TailwindTheme, ThemeColorT } from "./theme.types";

export const themes: {[theme: string]: TailwindTheme} = {
  light: {
    "foreground-color": "#08003d",
    "background-color": "#818181",
    "primary-color": "#525252",
    "secondary-color": "#917070",
    "accent-color": "#A65959",
  },
  dark: {
    "foreground-color": "#cac2ff",
    "background-color": "#100f0f",
    "primary-color": "#adadad",
    "secondary-color": "#151414",
    "accent-color": "#7d7878",
  },
};

export const themes2: {[tname: string]: ThemeColorT} = {
  light: {
    "primary": "#525252",
    "onprimary": "#F2ECFF",
    "secondary": "#917070",
    "onsecondary": "#000000",
    "accent": "#A65959",
    "onaccent": "#FFFFFF",
    "background": "#818181",
    "onbackground": "#08003d",  
  },
  next: {
    'primary': "#2C2A27",
    "onprimary": "#F2ECFF",
    'secondary': "#CA8E00",
    "onsecondary": "#000000",
    'background': "#726552",
    'onbackground': "#ffffff",
    'accent': '#AB3710',
    'onaccent': '#FFFFFF'
  },
  color: {
    'primary': "#509124",
    "onprimary": "#F2ECFF",
    'secondary': "#CA8E00",
    "onsecondary": "#000000",
    'background': "#EDDB1C",
    'onbackground': "#000000",
    'accent': '#A73309',
    'onaccent': '#FFFFFF'
  },
  full: {
    'primary': "#002db3",
    "onprimary": "#F2ECFF",
    'secondary': "#CA8E00",
    "onsecondary": "#000000",
    'background': "#ffff00",
    'onbackground': "#000000",
    'accent': '#ff0000',
    'onaccent': '#FFFFFF'
  },
  dark: {
    "background": "#100f0f",
    "onbackground": "#FFFFFF",
    "primary": "#adadad",
    "onprimary": "#F2ECFF",
    "secondary": "#151414",
    "onsecondary": "#cac2ff",
    "accent": "#7d7878",
    "onaccent": "#ffffff"
  },
};

