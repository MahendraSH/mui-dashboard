import { FC } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppSelector } from "./app/hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DashboardPage from "./app/pages/DashboardPage";
import TestTheme from "./components/TestTheme";
import { darkColorTokens, lightColorTokens, typography } from "./theme";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const mode = useAppSelector((state) => state.mode.mode);

  const theme = (mode: "light" | "dark" | undefined) => {
    const colorTokens =
      mode === "dark" || undefined ? darkColorTokens : lightColorTokens;

    return createTheme({
      palette: {
        mode: mode,
        background: {
          default: colorTokens.background,
          paper: colorTokens.card,
        },
        primary: {
          main: colorTokens.primary[500],
          light: colorTokens.primary[300],
          dark: colorTokens.primary[700],
          contrastText: colorTokens.primaryForeground,
        },
        secondary: {
          light: colorTokens.secondary[300],
          dark: colorTokens.secondary[700],
          main: colorTokens.secondary[500],
          contrastText: colorTokens.secondaryForeground,
        },
        grey: { ...colorTokens.muted },
        text: {
          primary: colorTokens.foreground,
          secondary: colorTokens.mutedForeground,
        },
        action: {
          hoverOpacity: 0.8,
          activatedOpacity: 0.7,
        },
        error: {
          main: colorTokens.destructive,
          contrastText: colorTokens.destructiveForeground,
        },
        divider: colorTokens.border,
      },
      typography: typography,

      shape: { borderRadius: 3.55 },

      components: {
        MuiButton: {
          defaultProps: { size: "medium", variant: "contained" },

          styleOverrides: {
            root: {
              textTransform: "capitalize",
            },
          },
        },

        MuiIconButton: {
          styleOverrides: {
            root: {
              ":hover": {
                backgroundColor: colorTokens.muted[400],
              },
            },
          },
        },
      },
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme(mode)}>
        <CssBaseline />
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/test-theme" element={<TestTheme />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
