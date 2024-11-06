import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';

import DashboardWidgetCard from '../../shared/DashboardWidgetCard';
import SkeletonYearlySalesCard from '../skeleton/YearlySalesCard';
import { Box } from '@mui/material';


interface YearlysalesCardProps {
  isLoading: boolean;
}

const YearlySales = ({ isLoading }: YearlysalesCardProps) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = theme.palette.grey[100];

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 295,
    },
    colors: [primarylight, primarylight, primary, primarylight, primarylight, primarylight],
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: '45%',
        distributed: true,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    xaxis: {
      categories: [['Apr'], ['May'], ['June'], ['July'], ['Aug'], ['Sept']],
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      data: [20, 15, 30, 25, 10, 15],
    },
  ];

  return (
    <>
      {
        isLoading ? (
          <SkeletonYearlySalesCard />
        ) : (
          <DashboardWidgetCard
            title="Yearly Sales"
            subtitle="Total Sales"
            dataLabel1="Salary"
            dataItem1="$36,358"
            dataLabel2="Expance"
            dataItem2="$5,296"
          >
            <>
              <Box height="310px">
                <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height="295px" width={"100%"} />
              </Box>
            </>
          </DashboardWidgetCard>
        )}
    </>

  );
};

export default YearlySales;
