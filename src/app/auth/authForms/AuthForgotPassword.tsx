import { Button, Stack } from "@mui/material";
import Link from "next/link";

import CustomTextField from "@/app/components/forms/theme-elements/CustomTextField";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";

export default function AuthForgotPassword(){
 return (
  <>
    <Stack mt={4} spacing={2}>
      <CustomFormLabel htmlFor="reset-email">Email Adddress</CustomFormLabel>
      <CustomTextField id="reset-email" variant="outlined" fullWidth />

      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="/"
      >
        Forgot Password
      </Button>
      <Button
        color="primary"
        size="large"
        fullWidth
        component={Link}
        href="/auth/auth1/login"
      >
        Back to Login
      </Button>
    </Stack>
  </>
)};
