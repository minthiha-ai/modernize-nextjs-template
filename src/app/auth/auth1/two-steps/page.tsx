"use client";
import { Grid, Box, Typography } from '@mui/material';
import PageContainer from '@/app/components/container/PageContainer';
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo';
import AuthTwoSteps from '../../authForms/AuthTwoSteps';
import Image from 'next/image';

export default function TwoSteps() {
  return(
  <PageContainer title="Two steps Page" description="this is Sample page">
    <Grid container spacing={0} justifyContent="center" sx={{ overflowX: 'hidden' }}>
      <Grid
        item
        xs={12}
        sm={12}
        lg={8}
        xl={9}
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Box position="relative">
          <Box px={3}>
            <Logo />
          </Box>
          <Box
            alignItems="center"
            justifyContent="center"
            height={'calc(100vh - 75px)'}
            sx={{
              display: {
                xs: 'none',
                lg: 'flex',
              },
            }}
          >
            <Image
              src={"/images/backgrounds/login-bg.svg"}
              alt="bg" width={500} height={500}
              style={{
                width: '100%',
                maxWidth: '500px',  maxHeight: '500px',
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        lg={4}
        xl={3}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box p={4}>
        <Typography variant="h4" fontWeight="700">
            Two Step Verification
          </Typography>

          <Typography variant="subtitle1" color="textSecondary" mt={2} mb={1}>
            We sent a verification code to your mobile. Enter the code from the mobile in the field
            below.
          </Typography>
          <Typography variant="subtitle1" fontWeight="700" mb={1}>
            ******1234
          </Typography>
          <AuthTwoSteps />
        </Box>
      </Grid>
    </Grid>
  </PageContainer>
)};
