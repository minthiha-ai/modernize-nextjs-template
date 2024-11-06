'use client'

import { Grid } from '@mui/material';

import ComboBoxAutocomplete from '@/app/components/forms/form-elements/autoComplete/ComboBoxAutocomplete';
import CountrySelectAutocomplete from '@/app/components/forms/form-elements/autoComplete/CountrySelectAutocomplete';
import ControlledStateAutocomplete from '@/app/components/forms/form-elements/autoComplete/ControlledStateAutocomplete';
import FreeSoloAutocomplete from '@/app/components/forms/form-elements/autoComplete/FreeSoloAutocomplete';
import MultipleValuesAutocomplete from '@/app/components/forms/form-elements/autoComplete/MultipleValuesAutocomplete';
import CheckboxesAutocomplete from '@/app/components/forms/form-elements/autoComplete/CheckboxesAutocomplete';
import SizesAutocomplete from '@/app/components/forms/form-elements/autoComplete/SizesAutocomplete';

import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import ParentCard from '@/app/components/shared/ParentCard';
import ChildCard from '@/app/components/shared/ChildCard';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'AutoComplete',
  },
];

const MuiAutoComplete = () => (
  <PageContainer title="Autocomplete" description="this is Autocomplete">
    {/* breadcrumb */}
    <Breadcrumb title="AutoComplete" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Autocomplete">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Combo Box">
            <ComboBoxAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Country Select">
            <CountrySelectAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Controlled State">
            <ControlledStateAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Free Solo">
            <FreeSoloAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Multiple Values">
            <MultipleValuesAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Checkboxes">
            <CheckboxesAutocomplete />
          </ChildCard>
        </Grid>
        <Grid item xs={12} lg={4} sm={6} display="flex" alignItems="stretch">
          <ChildCard title="Sizes">
            <SizesAutocomplete />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiAutoComplete;
