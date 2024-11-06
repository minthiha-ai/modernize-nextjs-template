'use client'

import React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Grid } from '@mui/material';
import ParentCard from '@/app/components/shared/ParentCard';
import ChildCard from '@/app/components/shared/ChildCard';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Date Time',
  },
];

const MuiDateTime = () => {
  const [value, setValue] = React.useState<Dayjs | null>(null);
  const [value2, setValue2] = React.useState<Dayjs | null>(null);

  // date time
  const [value3, setValue3] = React.useState<Dayjs | null>(dayjs('2018-01-01T00:00:00.000Z'));

  return (
    <PageContainer title="Datepicker" description="this is Datepicker">
      {/* breadcrumb */}
      <Breadcrumb title="Date Picker" items={BCrumb} />
      {/* end breadcrumb */}

      <ParentCard title="Date Time">
        <Grid container spacing={3}>
          {/* ------------------------------------------------------------------- */}
          {/* Basic */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Basic">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDateTimePicker
                  onChange={(newValue) => {
                    setValue3(newValue);
                  }}
                  renderInput={(inputProps) => (
                    <CustomTextField
                      fullWidth
                      variant="outlined"
                      size="small"
                      inputProps={{ 'aria-label': 'basic date picker' }}
                      {...inputProps}
                    />
                  )}
                  value={value3}
                />
              </LocalizationProvider>
            </ChildCard>
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Different */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Different Design">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  renderInput={(props) => (
                    <CustomTextField
                      {...props}
                      fullWidth
                      size="small"
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                />
              </LocalizationProvider>
            </ChildCard>
          </Grid>
          {/* ------------------------------------------------------------------- */}
          {/* Timepicker */}
          {/* ------------------------------------------------------------------- */}
          <Grid item xs={12} lg={6} sm={6} display="flex" alignItems="stretch">
            <ChildCard title="Timepicker">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <TimePicker
                  value={value2}
                  onChange={(newValue) => {
                    setValue2(newValue);
                  }}
                  renderInput={(params) => (
                    <CustomTextField
                      size="small"
                      {...params}
                      fullWidth
                      sx={{
                        '& .MuiSvgIcon-root': {
                          width: '18px',
                          height: '18px',
                        },
                        '& .MuiFormHelperText-root': {
                          display: 'none',
                        },
                      }}
                    />
                  )}
                />
              </LocalizationProvider>
            </ChildCard>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

export default MuiDateTime;
