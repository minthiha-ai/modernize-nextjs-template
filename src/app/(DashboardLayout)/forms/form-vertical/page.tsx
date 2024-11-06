'use client'

import { Grid, Typography } from '@mui/material';

// components
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import ParentCard from '@/app/components/shared/ParentCard';

import BasicLayout from '@/app/components/forms/form-vertical/BasicLayout';

import BasicIcons from '@/app/components/forms/form-vertical/BasicIcons';
import FormSeparator from '@/app/components/forms/form-vertical/FormSeparator';
import CollapsibleForm from '@/app/components/forms/form-vertical/CollapsibleForm';
import FormTabs from '@/app/components/forms/form-vertical/FormTabs';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Vertical Form',
  },
];

const FormVertical = () => {
  return (
    <PageContainer title="Form Vertical" description="this is Form Vertical">
      {/* breadcrumb */}
      <Breadcrumb title="Vertical Form" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={12} lg={6}>
          <ParentCard title="Basic Layout">
            <BasicLayout />
          </ParentCard>
        </Grid>
        <Grid item xs={12} lg={6}>
            
          <ParentCard title="Basic with Icons">
            <BasicIcons />
          </ParentCard>

        </Grid>
        <Grid item xs={12}>
          <ParentCard title="Multi Column with Form Separator">
            <FormSeparator />
          </ParentCard>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mb={3}>Collapsible Section</Typography>
          <CollapsibleForm />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" mb={3}>Form with Tabs</Typography>
          <FormTabs />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FormVertical;
