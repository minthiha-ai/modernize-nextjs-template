'use client'

import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  FormControlLabel,
  Alert,
} from '@mui/material';
import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';

import CustomTextField from '@/app/components/forms/theme-elements/CustomTextField';
import CustomCheckbox from '@/app/components/forms/theme-elements/CustomCheckbox';
import CustomFormLabel from '@/app/components/forms/theme-elements/CustomFormLabel';
import ParentCard from '@/app/components/shared/ParentCard';
import { Stack } from '@mui/system';

const steps = ['Account', 'Profile', 'Finish'];

const FormWizard = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step:any) => step === 1;

  const isStepSkipped = (step:any) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);

      return newSkipped;
    });
  };

  // eslint-disable-next-line consistent-return
  const handleSteps = (step: any) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <CustomFormLabel htmlFor="Name">Name</CustomFormLabel>
            <CustomTextField id="Name" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="Email">Email</CustomFormLabel>
            <CustomTextField id="Email" type="email" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="Password">Password</CustomFormLabel>
            <CustomTextField id="Password" type="password" variant="outlined" fullWidth />
          </Box>
        );
      case 1:
        return (
          <Box>
            <CustomFormLabel htmlFor="Fname">First Name</CustomFormLabel>
            <CustomTextField id="Fname" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="Lname">Last Name</CustomFormLabel>
            <CustomTextField id="Lname" type="text" variant="outlined" fullWidth />
            <CustomFormLabel htmlFor="Address">Address</CustomFormLabel>
            <CustomTextField id="Address" multiline rows={4} variant="outlined" fullWidth />
          </Box>
        );
      case 2:
        return (
          <Box pt={3}>
            <Typography variant="h5">Terms and condition</Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Sard about this site or you have been to it, but you cannot figure out what it is or
              what it can do. MTA web directory isSard about this site or you have been to it, but
              you cannot figure out what it is or what it can do. MTA web directory is
            </Typography>
            <FormControlLabel
              control={<CustomCheckbox defaultChecked />}
              label="Agree with terms?"
            />
          </Box>
        );
      default:
        break;
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <PageContainer title="Form Wizard" description="this is Form Wizard">
      <Breadcrumb title="Form Wizard" subtitle="this is Form Wizard page" />
      <ParentCard title="Form Wizard">
        <Box width="100%">
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption">Optional</Typography>;
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Stack spacing={2} mt={3}>
                <Alert severity="success">
                  All steps completed - you&apos;re finished
                </Alert>

                <Box textAlign="right">
                  <Button onClick={handleReset} variant="contained" color="error">
                    Reset
                  </Button>
                </Box>
              </Stack>
            </>
          ) : (
            <>
              <Box>{handleSteps(activeStep)}</Box>

              <Box display="flex" flexDirection="row" mt={3}>
                <Button
                  color="inherit"
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box flex="1 1 auto" />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button
                  onClick={handleNext}
                  variant="contained"
                  color={activeStep === steps.length - 1 ? 'success' : 'secondary'}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </ParentCard>
    </PageContainer>
  );
};

export default FormWizard;
