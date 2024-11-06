'use client'

import React from 'react';
import {
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  CardContent,
  ListItemIcon,
  Chip,
  Switch,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';

import { IconCheck, IconX } from '@tabler/icons-react';
import BlankCard from '@/app/components/shared/BlankCard';
import Image from 'next/image';


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Pricing',
  },
];

const pricing = [
  {
    id: 1,
    package: 'Silver',
    plan: 'Free',
    monthlyplan: 'Free',
    avatar: "/images/backgrounds/silver.png",
    badge: false,
    btntext: 'Choose Silver',
    rules: [
      {
        limit: true,
        title: '3 Members',
      },
      {
        limit: true,
        title: 'Single Device',
      },
      {
        limit: false,
        title: '50GB Storage',
      },
      {
        limit: false,
        title: 'Monthly Backups',
      },
      {
        limit: false,
        title: 'Permissions & workflows',
      },
    ],
  },
  {
    id: 2,
    package: 'Bronze',
    monthlyplan: 10.99,
    avatar: "/images/backgrounds/bronze.png",
    badge: true,
    btntext: 'Choose Bronze',
    rules: [
      {
        limit: true,
        title: '5 Members',
      },
      {
        limit: true,
        title: 'Multiple Device',
      },
      {
        limit: true,
        title: '80GB Storage',
      },
      {
        limit: false,
        title: 'Monthly Backups',
      },
      {
        limit: false,
        title: 'Permissions & workflows',
      },
    ],
  },
  {
    id: 3,
    package: 'Gold',
    monthlyplan: 22.99,
    avatar: "/images/backgrounds/gold.png",
    badge: false,
    btntext: 'Choose Gold',
    rules: [
      {
        limit: true,
        title: 'Unlimited Members',
      },
      {
        limit: true,
        title: 'Multiple Device',
      },
      {
        limit: true,
        title: '150GB Storage',
      },
      {
        limit: true,
        title: 'Monthly Backups',
      },
      {
        limit: true,
        title: 'Permissions & workflows',
      },
    ],
  },
];

const Pricing = () => {
  const [show, setShow] = React.useState(false);

  const yearlyPrice = (a: any, b: number) => a * b;

  const theme = useTheme();
  const warninglight = theme.palette.warning.light;
  const warning = theme.palette.warning.main;

  const StyledChip = styled(Chip)({
    position: 'absolute',
    top: '15px',
    right: '30px',
    backgroundColor: warninglight,
    color: warning,
    textTransform: 'uppercase',
    fontSize: '11px',
  });

  return (
    <PageContainer title="Pricing" description="this is Pricing">
      {/* breadcrumb */}
      <Breadcrumb title="Pricing" items={BCrumb} />
      {/* end breadcrumb */}

      <Grid container spacing={3} justifyContent="center" mt={3}>
        <Grid item xs={12} sm={10} lg={8} textAlign="center">
          <Typography variant="h2">
            Flexible Plans Tailored to Fit Your Community&apos;s Unique Needs!
          </Typography>
          <Box display="flex" alignItems="center" mt={3} justifyContent="center">
            <Typography variant="subtitle1">Monthly</Typography>
            <Switch onChange={() => setShow(!show)} />
            <Typography variant="subtitle1">Yearly</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={3} mt={5}>
        {pricing.map((price, i) => (
          <Grid item xs={12} lg={4} sm={6} key={i}>
            <BlankCard>
              <CardContent sx={{ p: '30px' }}>
                {price.badge ? <StyledChip label="Popular" size="small"></StyledChip> : null}

                <Typography
                  variant="subtitle1"
                  fontSize="12px"
                  mb={3}
                  color="textSecondary"
                  textTransform="uppercase"
                >
                  {price.package}
                </Typography>
                <Image src={price.avatar} alt={price.avatar} width={90} height={90} />
                <Box my={4}>
                  {price.plan == 'Free' ? (
                    <Box fontSize="50px" mt={5} fontWeight="600">
                      {price.plan}
                    </Box>
                  ) : (
                    <Box display="flex">
                      <Typography variant="h6" mr="8px" mt="-12px">
                        $
                      </Typography>
                      {show ? (
                        <>
                          <Typography fontSize="48px" fontWeight="600">
                            {yearlyPrice(`${price.monthlyplan}`, 12)}
                          </Typography>
                          <Typography
                            fontSize="15px"
                            fontWeight={400}
                            ml={1}
                            color="textSecondary"
                            mt={1}
                          >
                            /yr
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography fontSize="48px" fontWeight="600">
                            {price.monthlyplan}
                          </Typography>
                          <Typography
                            fontSize="15px"
                            fontWeight={400}
                            ml={1}
                            color="textSecondary"
                            mt={1}
                          >
                            /mo
                          </Typography>
                        </>
                      )}
                    </Box>
                  )}
                </Box>

                <Box mt={3}>
                  <List>
                    {price.rules.map((rule, i) => (
                      <Box key={i}>
                        {rule.limit ? (
                          <>
                            <ListItem disableGutters>
                              <ListItemIcon sx={{ color: 'primary.main', minWidth: '32px' }}>
                                <IconCheck width={18} />
                              </ListItemIcon>
                              <ListItemText>{rule.title}</ListItemText>
                            </ListItem>
                          </>
                        ) : (
                          <ListItem disableGutters sx={{ color: 'grey.400' }}>
                            <ListItemIcon sx={{ color: 'grey.400', minWidth: '32px' }}>
                              <IconX width={18} />
                            </ListItemIcon>
                            <ListItemText>{rule.title}</ListItemText>
                          </ListItem>
                        )}
                      </Box>
                    ))}
                  </List>
                </Box>

                <Button
                  sx={{ width: '100%', mt: 3 }}
                  variant="contained"
                  size="large"
                  color="primary"
                >
                  {price.btntext}
                </Button>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </PageContainer>
  );
};

export default Pricing;
