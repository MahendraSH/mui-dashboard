import { FC } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useAppSelector } from "./app/hooks";
import { themeSettings } from "./theme";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const mode = useAppSelector((state) => state.mode);
  const myTheme = themeSettings(mode);
  const theme = createTheme({
    palette: {
      mode: mode.mode,
      ...myTheme,
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        App
      </ThemeProvider>
    </div>
  );
};

export default App;
