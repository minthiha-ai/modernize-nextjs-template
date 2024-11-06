import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Avatar } from '@mui/material';

import DashboardCard from '../../shared/DashboardCard';
import { IconArrowUpRight } from '@tabler/icons-react';
import SkeletonGrowthCard from '../skeleton/GrowthCard';


interface GrowthCardProps {
  isLoading: boolean;
}

const Growth = ({ isLoading }: GrowthCardProps) => {
  // chart color
  const theme = useTheme();
  const secondary = theme.palette.secondary.main;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'area',
      height: 25,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
      group: 'sparklines',
    },
    colors: [secondary],
    stroke: {
      curve: 'straight',
      width: 2,
    },
    fill: {
      type: 'solid',
      opacity: 0.05,
    },
    markers: {
      size: 0,
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      data: [0, 10, 10, 10, 35, 45, 30, 30, 30, 50, 52, 30, 25, 45, 50, 80, 60, 65],
    },
  ];

  return (
    <>
      {
        isLoading ? (
          <SkeletonGrowthCard />
        ) : (
          <DashboardCard>
            <>
              <Box
                width={38}
                height={38}
                bgcolor="secondary.light"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Avatar src='/images/svgs/icon-bars.svg' alt="img" sx={{ width: 25, height: 25 }} />
              </Box>

              <Box mt={3} mb={2} height="25px">
                <Chart options={optionscolumnchart} series={seriescolumnchart} type="area" height="25px" width={"100%"} />
              </Box>

              <Typography variant="h4">
                24%
                <span>
                  <IconArrowUpRight width={18} color="#39B69A" />
                </span>
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Growth
              </Typography>
            </>
          </DashboardCard>
        )}
    </>

  );
};

export default Growth;
