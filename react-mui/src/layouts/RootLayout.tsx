import Navbar from "@/components/navbar";
import { Box } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Navbar/>
      <Outlet />
    </Box>
  );
};

export default RootLayout;
