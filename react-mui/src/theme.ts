import { modeType } from "./app/state/modeSlice";

// color design tokens export
export interface colorTokenType {
  grey: {
    0: string; // manually adjusted
    10: string; // manually adjusted
    50: string; // manually adjusted
    100: string;
    200: string;
    300: string;
    400: string;
    500: string; // manually adjusted
    600: string;
    700: string;
    800: string;
    900: string;
    1000: string;
  };
  primary: {
    // blue
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string; // manually adjusted
    700: string;
    800: string;
    900: string;
  };
  secondary: {
    // yellow
    50: string; // manually adjusted
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
}
export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },
  primary: {
    // blue
    100: "#d3d4de",
    200: "#a6a9be",
    300: "#7a7f9d",
    400: "#4d547d",
    500: "#21295c",
    600: "#191F45", // manually adjusted
    700: "#141937",
    800: "#0d1025",
    900: "#070812",
  },
  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#fff6e0",
    200: "#ffedc2",
    300: "#ffe3a3",
    400: "#ffda85",
    500: "#ffd166",
    600: "#cca752",
    700: "#997d3d",
    800: "#665429",
    900: "#332a14",
  },
};

export const tokensLight = {
  grey: {
    0: "#000000", // manually adjusted
    10: "#141414", // manually adjusted
    50: "#292929", // manually adjusted
    100: "#666666",
    200: "#858585",
    300: "#a3a3a3",
    400: "#c2c2c2",
    500: "#e0e0e0",
    600: "#f0f0f0",
    700: "#f6f6f6",
    800: "#ffffff", // manually adjusted
    900: "#ffffff",
    1000: "#ffffff", // manually adjusted
  },
  primary: {
    // blue
    100: "#070812",
    200: "#0d1025",
    300: "#141937",
    400: "#191F45", // manually adjusted
    500: "#21295c",
    600: "#4d547d",
    700: "#7a7f9d",
    800: "#a6a9be",
    900: "#d3d4de",
  },
  secondary: {
    // yellow
    50: "#332a14",
    100: "#665429",
    200: "#997d3d",
    300: "#cca752",
    400: "#ffd166",
    500: "#ffd166",
    600: "#ffda85",
    700: "#ffe3a3",
    800: "#ffedc2",
    900: "#fff6e0",
  },
};

// mui theme settings
export const themeSettings = (useMode: modeType) => {
  let mode = useMode.mode === undefined ? "dark" : useMode.mode;
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};
