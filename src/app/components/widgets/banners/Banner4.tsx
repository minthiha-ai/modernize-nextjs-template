import { CardContent, Typography, Button } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { Box } from '@mui/system';
import Image from 'next/image';

const Banner4 = () => {
  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Box textAlign="center">
          <Image src={"/images/backgrounds/maintenance2.svg"} width={200} height={200} alt="star" style={{ width: '200px' }} />

          <Typography variant="h5" mt={3}>Oops something went wrong!</Typography>
          <Typography variant="subtitle1" color="textSecondary" mt={1} mb={2}>
            Trying again to bypasses these<br /> temporary error.
          </Typography>

          <Button color="error" variant="contained" size="large">
            Retry
          </Button>
        </Box>
      </CardContent>
    </BlankCard>
  );
};

export default Banner4;
