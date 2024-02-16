import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import { FC, useState } from "react";
import { FlexBetween } from "./ui/flex-box-style";

import {
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search as SearchIcon,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useAppDispatch } from "@/app/hooks";
import { setMode } from "@/app/state/modeSlice";
import { Link } from "react-router-dom";

interface NavbarProps {
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar: boolean;
}

const Navbar: FC<NavbarProps> = ({ setOpenSidebar, openSidebar }) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
        height: "4rem",
        borderBottom: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between " }}>
        <FlexBetween gap={2}>
          <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            bgcolor={theme.palette.secondary.dark}
            borderRadius={"0.5rem"}
            gap={"3rem"}
            px={"1.45rem"}
            py={"0.25rem"}
            sx={{
              bgcolor:
                theme.palette.mode === "dark"
                  ? theme.palette.secondary.dark
                  : theme.palette.secondary.light,
            }}
          >
            <InputBase
              placeholder=" Search ..."
              sx={{
                display: { xs: "none", md: "block" },
              }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </FlexBetween>
        </FlexBetween>
        <FlexBetween gap={2}>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
