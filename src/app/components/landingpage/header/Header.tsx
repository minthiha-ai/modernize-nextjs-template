import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";
import Navigations from "./Navigations";
import MobileSidebar from "./MobileSidebar";
import { IconMenu2 } from "@tabler/icons-react";

const LpHeader = () => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    justifyContent: "center",
    [theme.breakpoints.up("lg")]: {
      minHeight: "80px",
    },
    backgroundColor: theme.palette.background.default,
  }));

  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    paddingLeft: "0 !important",
    paddingRight: "0 !important",
    color: theme.palette.text.secondary,
  }));

  //   sidebar
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBarStyled position="sticky" elevation={8}>
      <Container maxWidth="lg">
        <ToolbarStyled>
          <Logo />
          <Box flexGrow={1} />
          {lgDown ? (
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <IconMenu2 size="20" />
            </IconButton>
          ) : null}
          {lgUp ? (
            <Stack spacing={1} direction="row" alignItems="center">
              <Navigations />
            </Stack>
          ) : null}
        </ToolbarStyled>
      </Container>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 270,
            border: "0 !important",
            boxShadow: (theme) => theme.shadows[8],
          },
        }}
      >
        <MobileSidebar />
      </Drawer>
    </AppBarStyled>
  );
};

export default LpHeader;
