"use client"

import React from 'react';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Button,
  SliderValueLabelProps,
} from '@mui/material';
import { SliderThumb } from '@mui/material/Slider';

import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomSelect from '@/app/components/forms/theme-elements/CustomSelect';
import CustomSlider from '@/app/components/forms/theme-elements/CustomSlider';
import CustomRangeSlider from '@/app/components/forms/theme-elements/CustomRangeSlider';
import CustomSwitch from '@/app/components/forms/theme-elements/CustomSwitch';
import CustomDisabledButton from '@/app/components/forms/theme-elements/CustomDisabledButton';
import CustomOutlinedButton from '@/app/components/forms/theme-elements/CustomOutlinedButton';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';
import CustomRadio from '@/app/components/forms/theme-elements/CustomRadio';
import ParentCard from '@/app/components/shared/ParentCard';
import { IconVolume, IconVolume2 } from '@tabler/icons-react';
import { Stack } from '@mui/material';

function CustomThumbComponent(props: SliderValueLabelProps) {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
        }}
      />
      <Box
        sx={{
          height: '14px',
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
      <Box
        sx={{
          height: 9,
          width: '2px',
          backgroundColor: '#fff',
          ml: '2px',
        }}
      />
    </SliderThumb>
  );
}

export default function FormCustom() {
  const [age, setAge] = React.useState('1');
  const [select1, setSelect] = React.useState('1');
  const [select2, setSelect2] = React.useState('1');

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const handleChange4 = (event2: any) => {
    setSelect(event2.target.value);
  };

  const handleChange5 = (event3: any) => {
    setSelect2(event3.target.value);
  };

  const [value, setValue] = React.useState(null);
  const [value2, setValue2] = React.useState(null);

  const [value3, setValue3] = React.useState(30);
  const handleChange6 = (event: any, newValue: any) => {
    setValue3(newValue);
  };

  return (
    <PageContainer title="Custom Form" description="this is Custom Form">
      {/* breadcrumb */}
      <Breadcrumb title="Custom Form" subtitle="custom designed element" />
      {/* end breadcrumb */}
      <ParentCard title="Custom Form">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel htmlFor="name">Name</CustomFormLabel>
            <CustomTextField id="name" placeholder="Enter text" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="demo-simple-select">Select Dropdown</CustomFormLabel>
            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
            </CustomSelect>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 2 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel htmlFor="cname">Company Name</CustomFormLabel>
            <CustomTextField id="cname" placeholder="Enter text" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="time">Time</CustomFormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <TimePicker
                value={value2}
                onChange={(newValue) => {
                  setValue2(newValue);
                }}
                renderInput={(params) => (
                  <CustomTextField
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
          </Grid>
          {/* ----------------------------------- */}
          {/* column 3 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel htmlFor="disabled">Industry Type</CustomFormLabel>
            <CustomTextField
              id="disabled"
              placeholder="Disabled filled"
              variant="outlined"
              fullWidth
              disabled
              sx={{
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: (theme: any) =>
                    `${
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.12) !important'
                        : '#dee3e9 !important'
                    }`,
                },
              }}
            />
            <CustomFormLabel htmlFor="date">Date</CustomFormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                renderInput={(props) => (
                  <CustomTextField
                    {...props}
                    fullWidth
                    sx={{
                      '& .MuiSvgIcon-root': {
                        width: 18,
                        height: 18,
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
          </Grid>
          {/* ----------------------------------- */}
          {/* column 4 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={12}>
            <CustomFormLabel>Lorem ipsum dolor sit amet</CustomFormLabel>
            <RadioGroup aria-label="gender" defaultValue="radio1" name="radio-buttons-group">
              <Grid container>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControl component="fieldset">
                    <FormControlLabel value="radio1" control={<CustomRadio />} label="Male" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControl component="fieldset">
                    <FormControlLabel value="radio2" control={<CustomRadio />} label="Female" />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControl component="fieldset">
                    <FormControlLabel
                      value="radio3"
                      control={<CustomRadio disabled />}
                      label="Disabled"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 5 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={12}>
            <CustomFormLabel>Industry Type</CustomFormLabel>
            <RadioGroup aria-label="gender" defaultValue="radio1" name="radio-buttons-group">
              <Grid container>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    control={<CustomCheckbox defaultChecked />}
                    label="Enter text"
                  />
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel control={<CustomCheckbox />} label="Enter text" />
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <FormControlLabel
                    disabled
                    control={<CustomCheckbox disabled />}
                    label="Disabled"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
          {/* ----------------------------------- */}
          {/* column 6 */}
          {/* ----------------------------------- */}
          <Grid item xs={12} sm={12} lg={4}>
            <CustomFormLabel>Slider</CustomFormLabel>
            <CustomRangeSlider
              slots={{ thumb: CustomThumbComponent }}
              getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
              defaultValue={[20, 40]}
            />
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} sm={6} lg={6}>
                <CustomSelect id="range1" value={select1} onChange={handleChange4} fullWidth>
                  <MenuItem value={1}>750</MenuItem>
                  <MenuItem value={2}>850</MenuItem>
                  <MenuItem value={3}>950</MenuItem>
                </CustomSelect>
              </Grid>
              <Grid item xs={12} sm={6} lg={6}>
                <CustomSelect id="rang2" value={select2} onChange={handleChange5} fullWidth>
                  <MenuItem value={1}>950</MenuItem>
                  <MenuItem value={2}>1050</MenuItem>
                  <MenuItem value={3}>1150</MenuItem>
                </CustomSelect>
              </Grid>
            </Grid>
            <CustomFormLabel sx={{ mt: 3 }}>Volume</CustomFormLabel>
            <CustomSlider aria-label="Volume" value={value3} onChange={handleChange6} />
            <Box display="flex" alignItems="stretch">
              <Typography>
                <IconVolume2 width={20} />
              </Typography>
              <Box ml="auto">
                <Typography>
                  <IconVolume width={20} />
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* ----------------------------------- */}
          {/* column 7 */}
          {/* ----------------------------------- */}

          <Grid item xs={12} sm={12} lg={12}>
            <CustomFormLabel>Switch</CustomFormLabel>
            <Grid container spacing={0}>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControlLabel control={<CustomSwitch />} label="Enter text" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControlLabel control={<CustomSwitch defaultChecked />} label="Enter text" />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControlLabel
                  control={
                    <CustomSwitch
                      disabled
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-disabled+.MuiSwitch-track': {
                          opacity: 1,
                        },
                      }}
                    />
                  }
                  label="Disabled"
                />
              </Grid>
              <Grid item xs={12} sm={6} lg={3}>
                <FormControlLabel
                  control={
                    <CustomSwitch
                      defaultChecked
                      disabled
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked.Mui-disabled': {
                          opacity: 0.5,
                        },
                      }}
                    />
                  }
                  label="Disabled"
                />
              </Grid>
            </Grid>
            {/* button */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="space-between"
              mt={2}
            >
              <Stack spacing={1} direction="row">
                <Button variant="contained" color="primary">
                  Add New
                </Button>
                <CustomDisabledButton variant="contained" disabled>
                  Add New
                </CustomDisabledButton>
                <CustomOutlinedButton variant="outlined">Add New</CustomOutlinedButton>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" color="secondary">
                  Add New
                </Button>
                <Button variant="contained" color="success">
                  Add New
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </ParentCard>
    </PageContainer>
  );
};

