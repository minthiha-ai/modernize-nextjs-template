'use client'

import { Grid, Avatar, AvatarGroup, Badge, Stack } from '@mui/material';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import ParentCard from '@/app/components/shared/ParentCard';
import ChildCard from '@/app/components/shared/ChildCard';
import { IconMoodSmile } from '@tabler/icons-react';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Avatar',
  },
];

const MuiAvatar = () => (
  <PageContainer title="Avatar" description="this is Avatar">
    {/* breadcrumb */}
    <Breadcrumb title="Avatar" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Avatar">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Image avatars">
            <Stack direction="row" spacing={1} justifyContent="center">
              <Avatar alt="Remy Sharp" src={"/images/profile/user-4.jpg"} />
              <Avatar alt="Travis Howard" src={"/images/profile/user-2.jpg"} />
              <Avatar alt="Cindy Baker" src={"/images/profile/user-3.jpg"} />
            </Stack>
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Letter avatars">
            <Stack direction="row" spacing={1} justifyContent="center">
              <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>B</Avatar>
              <Avatar sx={{ bgcolor: 'error.main' }}>C</Avatar>
              <Avatar sx={{ bgcolor: 'warning.main' }}>D</Avatar>
              <Avatar sx={{ bgcolor: 'success.main' }}>E</Avatar>
            </Stack>
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Icon avatars">
            <Stack direction="row" spacing={1} justifyContent="center">
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <IconMoodSmile width={24} />
              </Avatar>
              <Avatar sx={{ bgcolor: 'secondary.main' }}>
                <IconMoodSmile width={24} />
              </Avatar>
              <Avatar sx={{ bgcolor: 'error.main' }}>
                <IconMoodSmile width={24} />
              </Avatar>
              <Avatar sx={{ bgcolor: 'warning.main' }}>
                <IconMoodSmile width={24} />
              </Avatar>
              <Avatar sx={{ bgcolor: 'success.main' }}>
                <IconMoodSmile width={24} />
              </Avatar>
            </Stack>
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Variant">
            <Stack direction="row" spacing={1} justifyContent="center">
              <Avatar sx={{ bgcolor: 'primary.main' }}>
                <IconMoodSmile width={24} />
              </Avatar>
              <Avatar sx={{ bgcolor: 'primary.main' }} variant="square">
                <IconMoodSmile width={24} />
              </Avatar>
              <Avatar sx={{ bgcolor: 'primary.main' }} variant="rounded">
                <IconMoodSmile width={24} />
              </Avatar>
            </Stack>
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Grouped">
            <Stack direction="row" spacing={1} justifyContent="center">
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src={"/images/profile/user-4.jpg"} />
                <Avatar alt="Travis Howard" src={"/images/profile/user-2.jpg"} />
                <Avatar alt="Cindy Baker" src={"/images/profile/user-3.jpg"} />
              </AvatarGroup>
            </Stack>
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Grouped Size">
            <Stack direction="row" spacing={1} justifyContent="center">
              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" sx={{ width: 56, height: 56 }} src={"/images/profile/user-4.jpg"} />
                <Avatar alt="Travis Howard" sx={{ width: 56, height: 56 }} src={"/images/profile/user-2.jpg"} />
                <Avatar alt="Cindy Baker" sx={{ width: 56, height: 56 }} src={"/images/profile/user-3.jpg"} />
              </AvatarGroup>
            </Stack>
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="With Badge">
            <Stack direction="row" spacing={1} justifyContent="center">
              <AvatarGroup>
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  badgeContent={
                    <Avatar sx={{ width: 22, height: 22 }} alt="Remy Sharp" src={"/images/profile/user-4.jpg"} />
                  }
                >
                  <Avatar alt="Travis Howard" src={"/images/profile/user-2.jpg"} />
                </Badge>
              </AvatarGroup>
              {/* 2 */}
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color="success"
              >
                <Avatar alt="Remy Sharp" src={"/images/profile/user-3.jpg"} />
              </Badge>
              {/* 3 */}
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color="warning"
              >
                <Avatar alt="Remy Sharp" src={"/images/profile/user-4.jpg"} />
              </Badge>
              {/* 4 */}
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                color="error"
              >
                <Avatar alt="Remy Sharp" src={"/images/profile/user-5.jpg"} />
              </Badge>
            </Stack>
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={8} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Sizes">
            <Stack direction="row" spacing={1} justifyContent="center">
              <Avatar alt="Remy Sharp" src={"/images/profile/user-2.jpg"} sx={{ width: 24, height: 24 }} />
              <Avatar alt="Remy Sharp" src={"/images/profile/user-3.jpg"} sx={{ width: 32, height: 32 }} />
              <Avatar alt="Remy Sharp" src={"/images/profile/user-4.jpg"} />
              <Avatar alt="Remy Sharp" src={"/images/profile/user-5.jpg"} sx={{ width: 50, height: 50 }} />
              <Avatar alt="Remy Sharp" src={"/images/profile/user-6.jpg"} sx={{ width: 60, height: 60 }} />
              <Avatar alt="Remy Sharp" src={"/images/profile/user-7.jpg"} sx={{ width: 65, height: 65 }} />
            </Stack>
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiAvatar;
