import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';

const StillQuestions = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} lg={10}>
        <Box bgcolor="primary.light" p={5} mt={7}>
          <Stack>
            <AvatarGroup sx={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Avatar alt="Remy Sharp" src={"/images/profile/user-4.jpg"} />
              <Avatar alt="Travis Howard" src={"/images/profile/user-2.jpg"} />
              <Avatar alt="Cindy Baker" src={"/images/profile/user-3.jpg"} />
            </AvatarGroup>
          </Stack>

          <Typography variant="h3" textAlign="center" mt={3} mb={1}>
            Still have questions
          </Typography>
          <Typography variant="h6" fontWeight={400} lineHeight="23px" color="textSecondary" textAlign="center">
            Can&apos;t find the answer your&apos;re looking for ? Please chat to our friendly team.
          </Typography>
          <Box textAlign="center" mt={3}>
            <Button variant="contained" color="primary">
              Chat with us
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default StillQuestions;
