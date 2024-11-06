import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import logoIcon from '/public/images/logos/logoIcon.svg';
import Image from 'next/image';

const Footer = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center" mt={4}>
        <Grid item xs={12} sm={5} lg={4} textAlign="center">
          <Image src={logoIcon} alt="icon" />
          <Typography fontSize="16" color="textSecondary" mt={1} mb={4}>
            All rights reserved by Modernize. Designed & Developed by
            <Link target="_blank" href="https://adminmart.com/">
              <Typography color="textSecondary" component="span" display="inline">
                {' '}
                AdminMart
              </Typography>{' '}
            </Link>
            .
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
