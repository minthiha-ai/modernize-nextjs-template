"use client";

import { CardContent, Grid } from "@mui/material";

// common components
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import ChildCard from "@/app/components/shared/ChildCard";
import BlankCard from "@/app/components/shared/BlankCard";
import Logo from "@/app/(DashboardLayout)/layout/shared/logo/Logo";

// custom components
import FVLogin from "@/app/components/forms/form-validation/FVLogin";
import FVRegister from "@/app/components/forms/form-validation/FVRegister";
import FVOnLeave from "@/app/components/forms/form-validation/FVOnLeave";
import FVRadio from "@/app/components/forms/form-validation/FVRadio";
import FVCheckbox from "@/app/components/forms/form-validation/FVCheckbox";
import FVSelect from "@/app/components/forms/form-validation/FVSelect";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Form Validation",
  },
];

const FormValidation = () => {
  return (
    <PageContainer title="Form Validation" description="this is Form Validation">
      <Breadcrumb title="Form Validation" items={BCrumb} />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <BlankCard>
            <CardContent sx={{ pt: 0 }}>
              <Logo />
              <FVRegister />
            </CardContent>
          </BlankCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <BlankCard>
            <CardContent sx={{ pt: 0 }}>
              <Logo />
              <FVLogin />
            </CardContent>
          </BlankCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChildCard title="On Leave">
            <FVOnLeave />
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChildCard title="Select">
            <FVSelect />
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChildCard title="Radio">
            <FVRadio />
          </ChildCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ChildCard title="Checkboxes">
            <FVCheckbox />
          </ChildCard>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FormValidation;
