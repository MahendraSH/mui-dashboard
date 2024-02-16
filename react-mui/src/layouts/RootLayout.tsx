import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Box, useMediaQuery } from "@mui/material";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {}

const RootLayout: FC<RootLayoutProps> = ({}) => {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const [openSidebar, setOpenSidebar] = useState<boolean>(isNotMobile);

  return (
    <Box
      sx={{ display: openSidebar ? "flex" : "block" }}
      width={"100%"}
      height={"100%"}
    >
      <Sidebar
        sidebarWidth={isNotMobile ? "15rem" : "18rem"}
        isNotMobile={isNotMobile}
        setOpenSidebar={setOpenSidebar}
        openSidebar={openSidebar}
      />
      <Box width={"100%"} height={"100%"}>
        <Navbar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default RootLayout;
