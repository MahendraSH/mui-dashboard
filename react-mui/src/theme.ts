export interface ColorTokenType {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: {
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
  primaryForeground: string;
  secondary: {
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
  secondaryForeground: string;
  muted: {
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
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  radius: string;
}

export const lightColorTokens: ColorTokenType = {
  background: "hsl(0, 0%, 100%)",
  foreground: "hsl(222.2, 84%, 4.9%)",
  card: "hsl(0, 0%, 100%)",
  cardForeground: "hsl(222.2, 84%, 4.9%)",
  popover: "hsl(0, 0%, 100%)",
  popoverForeground: "hsl(222.2, 84%, 4.9%)",
  primary: {
    100: "#d3e0fb",
    200: "#a8c1f7",
    300: "#7ca1f3",
    400: "#5182ef",
    500: "#2563eb",
    600: "#1e4fbc",
    700: "#163b8d",
    800: "#0f285e",
    900: "#07142f",
  },
  primaryForeground: "hsl(210, 40%, 98%)",
  secondary: {
    100: "#fcfdfe",
    200: "#f9fbfd",
    300: "#f7f9fb",
    400: "#f4f7fa",
    500: "#f1f5f9",
    600: "#c1c4c7",
    700: "#919395",
    800: "#606264",
    900: "#303132",
  },
  secondaryForeground: "hsl(222.2, 47.4%, 11.2%)",
  muted: {
    100: "#fcfdfe",
    200: "#f9fbfd",
    300: "#f7f9fb",
    400: "#f4f7fa",
    500: "#f1f5f9",
    600: "#c1c4c7",
    700: "#919395",
    800: "#606264",
    900: "#303132",
  },
  mutedForeground: "hsl(215.4, 16.3%, 46.9%)",
  accent: "hsl(210, 40%, 96.1%)",
  accentForeground: "hsl(222.2, 47.4%, 11.2%)",
  destructive: "hsl(0, 84.2%, 60.2%)",
  destructiveForeground: "hsl(210, 40%, 98%)",
  border: "hsl(214.3, 31.8%, 91.4%)",
  input: "hsl(214.3, 31.8%, 91.4%)",
  ring: "hsl(221.2, 83.2%, 53.3%)",
  radius: "0.5rem",
};

export const darkColorTokens: ColorTokenType = {
  background: "hsl(222.2, 84%, 4.9%)",
  foreground: "hsl(210, 40%, 98%)",
  card: "hsl(222.2, 84%, 4.9%)",
  cardForeground: "hsl(210, 40%, 98%)",
  popover: "hsl(222.2, 84%, 4.9%)",
  popoverForeground: "hsl(210, 40%, 98%)",
  primary: {
    100: "#d8e6fd",
    200: "#b1cdfb",
    300: "#89b4fa",
    400: "#629bf8",
    500: "#3b82f6",
    600: "#2f68c5",
    700: "#234e94",
    800: "#183462",
    900: "#0c1a31",
  },
  primaryForeground: "hsl(222.2, 47.4%, 11.2%)",
  secondary: {
    100: "#d2d4d8",
    200: "#a5a9b1",
    300: "#787f89",
    400: "#4b5462",
    500: "#1e293b",
    600: "#18212f",
    700: "#121923",
    800: "#0c1018",
    900: "#06080c",
  },
  secondaryForeground: "hsl(210, 40%, 98%)",
  muted: {
    100: "#d2d4d8",
    200: "#a5a9b1",
    300: "#787f89",
    400: "#4b5462",
    500: "#1e293b",
    600: "#18212f",
    700: "#121923",
    800: "#0c1018",
    900: "#06080c",
  },
  mutedForeground: "hsl(215, 20.2%, 65.1%)",
  accent: "hsl(217.2, 32.6%, 17.5%)",
  accentForeground: "hsl(210, 40%, 98%)",
  destructive: "hsl(0, 62.8%, 30.6%)",
  destructiveForeground: "hsl(210, 40%, 98%)",
  border: "hsl(217.2, 32.6%, 17.5%)",
  input: "hsl(217.2, 32.6%, 17.5%)",
  ring: "hsl(224.3, 76.3%, 48%)",
  radius: "0.5rem",
};

export const typography = {
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
};
