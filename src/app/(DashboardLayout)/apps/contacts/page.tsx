"use client"

import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import ContactDetails from '@/app/components/apps/contacts/ContactDetails';
import ContactList from '@/app/components/apps/contacts/ContactList';
import ContactSearch from '@/app/components/apps/contacts/ContactSearch';
import ContactFilter from '@/app/components/apps/contacts/ContactFilter';
import AppCard from '@/app/components/shared/AppCard';

const drawerWidth = 240;
const secdrawerWidth = 320;

const Contacts = () => {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <PageContainer title="Contact" description="this is Contact">
      <Breadcrumb title="Contact app" subtitle="List Your Contacts" />
      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left Part */}
        {/* ------------------------------------------- */}

        <Drawer
          open={isLeftSidebarOpen}
          onClose={() => setLeftSidebarOpen(false)}
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, position: 'relative', zIndex: 2 },
            flexShrink: 0,
          }}
          variant={lgUp ? 'permanent' : 'temporary'}
        >
          <ContactFilter />
        </Drawer>
        {/* ------------------------------------------- */}
        {/* Middle part */}
        {/* ------------------------------------------- */}
        <Box
          sx={{
            minWidth: secdrawerWidth,
            width: { xs: '100%', md: secdrawerWidth, lg: secdrawerWidth },
            flexShrink: 0,
          }}
        >
          <ContactSearch onClick={() => setLeftSidebarOpen(true)} />
          <ContactList showrightSidebar={() => setRightSidebarOpen(true)} />
        </Box>
        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="right"
          open={isRightSidebarOpen}
          onClose={() => setRightSidebarOpen(false)}
          variant={mdUp ? 'permanent' : 'temporary'}
          sx={{
            width: mdUp ? secdrawerWidth : '100%',
            zIndex: lgUp ? 0 : 1,
            flex: mdUp ? 'auto' : '',
            [`& .MuiDrawer-paper`]: { width: '100%', position: 'relative' },
          }}
        >
          {/* back btn Part */}
          {mdUp ? (
            ''
          ) : (
            <Box sx={{ p: 3 }}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => setRightSidebarOpen(false)}
                sx={{ mb: 3, display: { xs: 'block', md: 'none', lg: 'none' } }}
              >
                Back{' '}
              </Button>
            </Box>
          )}
          <ContactDetails />
        </Drawer>
      </AppCard>
    </PageContainer>
  );
};

export default Contacts;
