import { CardContent, Typography, Button } from '@mui/material';
import BlankCard from '../../shared/BlankCard';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';

const Banner5 = () => {
  return (
    <BlankCard>
      <CardContent sx={{ p: '30px' }}>
        <Box textAlign="center">
          <Image src={"/images/products/empty-shopping-cart.svg"} width={200} height={200} alt="star" style={{ width: '200px' }} />

          <Typography variant="h5" mt={3}>Oop, Your cart is empty!</Typography>
          <Typography variant="subtitle1" color="textSecondary" mt={1} mb={2}>
            Get back to shopping and get<br /> rewards from it.
          </Typography>

          <Button color="primary" variant="contained" size="large">
            Go for shopping!
          </Button>
        </Box>
      </CardContent>
    </BlankCard>
  );
};

export default Banner5;
