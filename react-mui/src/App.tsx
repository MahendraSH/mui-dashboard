import { FC } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppSelector } from "./app/hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DashboardPage from "./app/pages/DashboardPage";
import TestTheme from "./components/TestTheme";
import { darkColorTokens, lightColorTokens, typography } from "./theme";
import { Opacity } from "@mui/icons-material";

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
          main: colorTokens.primary,
          contrastText: colorTokens.primaryForeground,
        },
        secondary: {
          main: colorTokens.secondary,
          contrastText: colorTokens.secondaryForeground,
        },

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

      shape: { borderRadius: 8 },

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
                backgroundColor: colorTokens.muted,
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
