'use client'

import { Grid } from '@mui/material';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';

import PaymentGateways from '@/app/components/dashboards/ecommerce/PaymentGateways';
import RecentTransactions from '@/app/components/dashboards/ecommerce/RecentTransactions';
import TopCards from '@/app/components/dashboards/modern/TopCards';
import UpcomingAcitivity from '@/app/components/widgets/cards/UpcomingActivity';
import ComplexCard from '@/app/components/widgets/cards/ComplexCard';
import MusicCard from '@/app/components/widgets/cards/MusicCard';
import EcommerceCard from '@/app/components/widgets/cards/EcommerceCard';
import FollowerCard from '@/app/components/widgets/cards/FollowerCard';
import FriendCard from '@/app/components/widgets/cards/FriendCard';
import ProfileCard from '@/app/components/widgets/cards/ProfileCard';

import Settings from '@/app/components/widgets/cards/Settings';
import GiftCard from '@/app/components/widgets/cards/GiftCard';


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Cards',
  },
];

const WidgetCards = () => {
  return (
    <PageContainer title="Cards" description="this is Cards">
    {/* breadcrumb */}
    <Breadcrumb title="Cards" items={BCrumb} />
    {/* end breadcrumb */}
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TopCards />
      </Grid>
      <Grid item xs={12}>
        <ComplexCard />
      </Grid>
      <Grid item xs={12}>
        <EcommerceCard />
      </Grid>
      <Grid item xs={12}>
        <MusicCard />
      </Grid>
      <Grid item xs={12}>
        <FollowerCard />
      </Grid>
      <Grid item xs={12}>
        <FriendCard />
      </Grid>
      <Grid item xs={12}>
        <ProfileCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Settings />
      </Grid>
      <Grid item xs={12} lg={8}>
        <GiftCard />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <PaymentGateways />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <UpcomingAcitivity />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <RecentTransactions />
      </Grid>
    </Grid>
    </PageContainer>
  );
};

export default WidgetCards;
