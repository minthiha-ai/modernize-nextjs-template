import React from 'react';
import Drawer from '@mui/material/Drawer';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProductFilter from './ProductFilter';

const drawerWidth = 250;

interface Props {
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.SyntheticEvent | Event) => void;
}

const ProductSidebar = ({ isMobileSidebarOpen, onSidebarClose }: Props) => {
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

  return (
    <Drawer
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant={lgUp ? 'permanent' : 'temporary'}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        zIndex: lgUp ? 0 : 1,
        [`& .MuiDrawer-paper`]: { position: 'relative' },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Filter Sidebar */}
      {/* ------------------------------------------- */}
      <ProductFilter />
    </Drawer>
  );
};


export default ProductSidebar;
