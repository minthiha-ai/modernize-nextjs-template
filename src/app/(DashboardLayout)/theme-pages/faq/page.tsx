'use client'

import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import { Grid } from '@mui/material';
import Questions from '@/app/components/pages/faq/Questions';
import StillQuestions from '@/app/components/pages/faq/StillQuestions';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'FAQ',
  },
];

const Faq = () => {
  return (
    <PageContainer title="FAQ" description="this is FAQ">
      {/* breadcrumb */}
      <Breadcrumb title="FAQ" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Questions />
          <StillQuestions />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Faq;
