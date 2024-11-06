import { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import useMediaQuery from '@mui/material/useMediaQuery'
import NavListing from './NavListing/NavListing';
import Logo from '../../shared/logo/Logo';
import { useSelector, useDispatch } from '@/store/hooks';
import { toggleMobileSidebar } from '@/store/customizer/CustomizerSlice';
import SidebarItems from '../../vertical/sidebar/SidebarItems';
import { AppState } from '@/store/store';

const Navigation = () => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  if (lgUp) {
    return (
      <Box sx={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }} py={2}>
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Container
          sx={{
            maxWidth: customizer.isLayout === 'boxed' ? 'lg' : '100%!important',
          }}
        >
          <NavListing />
        </Container>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={customizer.isMobileSidebar}
      onClose={() => dispatch(toggleMobileSidebar())}
      variant="temporary"
      PaperProps={{
        sx: {
          width: customizer.SidebarWidth,
          border: '0 !important',
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}
      <Box px={2}>
        <Logo />
      </Box>
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
    </Drawer>
  );
};

export default Navigation;
