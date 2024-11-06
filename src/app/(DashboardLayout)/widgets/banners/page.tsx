'use client'

import { Grid } from '@mui/material';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import WelcomeCard from '@/app/components/dashboards/ecommerce/WelcomeCard';
import Banner1 from '@/app/components/widgets/banners/Banner1';
import Banner2 from '@/app/components/widgets/banners/Banner2';
import Banner3 from '@/app/components/widgets/banners/Banner3';
import Banner4 from '@/app/components/widgets/banners/Banner4';
import Banner5 from '@/app/components/widgets/banners/Banner5';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Banner',
  },
];

const WidgetBanners = () => {
  return (
    <PageContainer title="Banners" description="this is Banners">
      {/* breadcrumb */}
      <Breadcrumb title="Banner" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <WelcomeCard />
            </Grid>
            <Grid item xs={12}>
              <Banner1 />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Banner4 />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Banner5 />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Banner2 />
            </Grid>
            <Grid item xs={12}>
              <Banner3 />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default WidgetBanners;
