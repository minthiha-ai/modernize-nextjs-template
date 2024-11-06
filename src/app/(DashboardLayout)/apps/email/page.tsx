"use client"

import { useState } from "react";
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery'
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import EmailList from '@/app/components/apps/email/EmailList';
import EmailFilter from '@/app/components/apps/email/EmailFilter';
import EmailSearch from '@/app/components/apps/email/EmailSearch';
import EmailContent from '@/app/components/apps/email/EmailContent';
import PageContainer from '@/app/components/container/PageContainer';
import AppCard from '@/app/components/shared/AppCard';
import Image from "next/image";

const drawerWidth = 240;
const secdrawerWidth = 340;

const Email = () => {
  const [isLeftSidebarOpen, setLeftSidebarOpen] = useState(false);
  const [isRightSidebarOpen, setRightSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("md"));

  return (
    <PageContainer title="Email" description="this is Email">
      <Breadcrumb title="Email app" subtitle="Look at Inbox">
        <Image
          src="/images/breadcrumb/emailSv.png"
          alt={"emailIcon"} width={195} height={195}
        />
      </Breadcrumb>

      <AppCard>
        {/* ------------------------------------------- */}
        {/* Left part */}
        {/* ------------------------------------------- */}

        <Drawer
          open={isLeftSidebarOpen}
          onClose={() => setLeftSidebarOpen(false)}
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              position: "relative",
              zIndex: 2,
            },
            flexShrink: 0,
          }}
          variant={lgUp ? "permanent" : "temporary"}
        >
          <EmailFilter />
        </Drawer>

        {/* ------------------------------------------- */}
        {/* Middle part */}
        {/* ------------------------------------------- */}

        <Box
          sx={{
            minWidth: secdrawerWidth,
            width: { xs: "100%", md: secdrawerWidth, lg: secdrawerWidth },
            flexShrink: 0,
          }}
        >
          <EmailSearch onClick={() => setLeftSidebarOpen(true)} />

          <EmailList showrightSidebar={() => setRightSidebarOpen(true)} />
        </Box>

        {/* ------------------------------------------- */}
        {/* Right part */}
        {/* ------------------------------------------- */}

        {mdUp ? (
          <Drawer
            anchor="right"
            variant="permanent"
            sx={{
              zIndex: 0,
              width: "200px",
              flex: "1 1 auto",
              [`& .MuiDrawer-paper`]: { position: "relative" },
            }}
          >
            <Box>
              <EmailContent />
            </Box>
          </Drawer>
        ) : (
          <Drawer
            anchor="right"
            open={isRightSidebarOpen}
            onClose={() => setRightSidebarOpen(false)}
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: "85%" },
            }}
            variant="temporary"
          >
            <Box p={3}>
              <Button
                variant="outlined"
                color="primary"
                size="small"
                onClick={() => setRightSidebarOpen(false)}
                sx={{ mb: 3, display: { xs: "block", md: "none", lg: "none" } }}
              >
                {" "}
                Back{" "}
              </Button>
              <EmailContent />
            </Box>
          </Drawer>
        )}
      </AppCard>
    </PageContainer>
  );
};

export default Email;
