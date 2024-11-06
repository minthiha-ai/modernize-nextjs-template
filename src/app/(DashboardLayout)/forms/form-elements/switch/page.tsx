'use client'

import { Grid } from '@mui/material';
import ParentCard from '@/app/components/shared/ParentCard';
import ChildCard from '@/app/components/shared/ChildCard';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import CustomExSwitch from '@/app/components/forms/form-elements/switch/Custom';
import DefaultSwitch from '@/app/components/forms/form-elements/switch/Default';
import DefaultLabelSwitch from '@/app/components/forms/form-elements/switch/DefaultLabel';
import SizesSwitch from '@/app/components/forms/form-elements/switch/Sizes';
import ColorsSwitch from '@/app/components/forms/form-elements/switch/Colors';
import PositionSwitch from '@/app/components/forms/form-elements/switch/Position';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Switch',
  },
];

const MuiSwitch = () => (
  <PageContainer title="Switch" description="this is Switch">
    {/* breadcrumb */}
    <Breadcrumb title="Switch" items={BCrumb} />
    {/* end breadcrumb */}
    <ParentCard title="Switch">
      <Grid container spacing={3}>
        {/* ------------------------------------------------------------------- */}
        {/* Custom */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Custom">
            <CustomExSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Default */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Default">
            <DefaultSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Default with label */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Default with Label">
            <DefaultLabelSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Sizes */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Sizes">
            <SizesSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Default Colors */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Default Colors">
            <ColorsSwitch />
          </ChildCard>
        </Grid>
        {/* ------------------------------------------------------------------- */}
        {/* Placement */}
        {/* ------------------------------------------------------------------- */}
        <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Placement">
            <PositionSwitch />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiSwitch;
