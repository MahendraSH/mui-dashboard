import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRight,
  ShoppingCartOutlined,
  HomeOutlined,
  GroupOutlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  AccountCircleOutlined,
  Groups2Outlined,
  PieChartOutlined,
} from "@mui/icons-material";
import {
  Box,
  useTheme,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Drawer,
  IconButton,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FlexBetween } from "./ui/flex-box-style";

interface SidebarProps {
  isNotMobile: Boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  openSidebar: boolean;
  sidebarWidth: string;
}

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar: FC<SidebarProps> = ({
  isNotMobile,
  setOpenSidebar,
  openSidebar,
  sidebarWidth,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState<string>("");

  const navigate = useNavigate();

  const theme = useTheme();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname, openSidebar]);
  return (
    <Drawer
      open={openSidebar}
      onClose={() => setOpenSidebar(false)}
      variant={isNotMobile ? "persistent" : "temporary"}
      anchor="left"
      sx={{
        width: sidebarWidth,
        boxShadow: theme.palette.secondary.contrastText,
        height: "100%",
        border: isNotMobile ? 0 : "2px",
        "& .MuiDrawer-paper": {
          width: sidebarWidth,

          bgcolor: {
            dark: theme.palette.secondary.dark,
            light: theme.palette.secondary.light,
          },
        },
      }}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box mx={"2rem"} my={"1rem"} width={"100%"}>
          <FlexBetween
            color={theme.palette.secondary.contrastText}
            width={"100%"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={"0.5rem"}
              justifyContent={"space-between"}
              width={"100%"}
              mx={3}
            >
              <Typography variant="h4" fontWeight={"semibold"}>
                EcomSystem
              </Typography>
              {!isNotMobile && (
                <IconButton onClick={() => setOpenSidebar(!openSidebar)}>
                  {openSidebar ? <ChevronLeft /> : <ChevronRight />}
                </IconButton>
              )}
            </Box>
          </FlexBetween>
        </Box>
        <List
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex ",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {navItems.map(({ text, icon }) =>
            icon ? (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  gap: 1,
                  mx: "0.5rem",
                }}
              >
                <ListItemButton
                  onClick={() => {
                    navigate(`/${text.toLowerCase()}`);
                  }}
                  sx={{
                    borderRadius: theme.shape.borderRadius,
                    bgcolor:
                      active === text.toLowerCase()
                        ? theme.palette.primary.main
                        : theme.palette.secondary.main,

                    ":hover": {
                      bgcolor:
                        active === text.toLowerCase()
                          ? theme.palette.primary.light
                          : theme.palette.secondary.light,
                    },
                  }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  {text}
                </ListItemButton>
              </ListItem>
            ) : (
              <Typography key={text} variant="h5">
                {text}
              </Typography>
            )
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
