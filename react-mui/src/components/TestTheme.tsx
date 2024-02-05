import { Box, Button, useTheme } from "@mui/material";
import { FC } from "react";

interface TestThemeProps {}

const TestTheme: FC<TestThemeProps> = ({}) => {
  const theme = useTheme();
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"2rem"} mt={"2rem"}>
      <Box display={"flex"} gap={"2rem"}>
        <Button
          size="small"
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          primary.main
        </Button>
        <Button
          size="small"
          sx={{
            bgcolor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          }}
        >
          primary.light
        </Button>
        <Button
          size="small"
          sx={{
            bgcolor: theme.palette.primary.dark,
            color: theme.palette.primary.contrastText,
          }}
        >
          primary.dark
        </Button>
      </Box>
      <Box display={"flex"} gap={"2rem"}>
        <Button
          size="small"
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
        >
          secondary.main
        </Button>
        <Button
          size="small"
          sx={{
            bgcolor: theme.palette.secondary.light,
            color: theme.palette.secondary.contrastText,
            ":hover": {
              bgcolor: theme.palette.secondary.light,
              opacity: theme.palette.action.hoverOpacity,
            },
          }}
        >
          secondary.light
        </Button>
        <Button
          size="small"
          sx={{
            bgcolor: theme.palette.secondary.dark,
            color: theme.palette.secondary.contrastText,
            ":hover": {
              bgcolor: theme.palette.secondary.dark,
              opacity: 50,
            },
          }}
        >
          secondary.dark
        </Button>
      </Box>
      <Box display={"flex"} gap={"2rem"}>
        <Button
          sx={{
            bgcolor: theme.palette.grey[500],
            color: theme.palette.grey[100],
          }}
        >
          grey.500
        </Button>
        <Button
          sx={{
            bgcolor: theme.palette.grey[600],
            color: theme.palette.grey[100],
          }}
        >
          grey[500]
        </Button>
        <Button
          sx={{
            bgcolor: theme.palette.grey[700],
            color: theme.palette.grey[100],
          }}
        >
          secondary.dark
        </Button>
      </Box>
    </Box>
  );
};

export default TestTheme;
