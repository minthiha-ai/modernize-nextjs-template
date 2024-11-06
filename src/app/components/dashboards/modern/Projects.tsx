import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Box } from '@mui/material';
import { IconArrowUpLeft } from '@tabler/icons-react';

import DashboardCard from '../../shared/DashboardCard';
import SkeletonProjectCard from "../skeleton/ProjectCard";


interface ProjectCardProps {
  isLoading: boolean;
}

const Projects = ({ isLoading }: ProjectCardProps) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 80,
      resize: true,
      barColor: '#fff',
      sparkline: {
        enabled: true,
      },
    },
    colors: [primary],
    grid: {
      show: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: 'flat',
        endingShape: 'flat',
        columnWidth: '60%',
        barHeight: '20%',
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2.5,
      colors: ['rgba(0,0,0,0.01)'],
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
    },
    axisBorder: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      x: {
        show: false,
      },
    },
  };
  const seriescolumnchart = [
    {
      name: '',
      data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
    },
  ];

  return (
    <>
      {
        isLoading ? (
          <SkeletonProjectCard />
        ) : (
          <DashboardCard>
            <>
              <Typography variant="subtitle2" color="textSecondary">
                Projects
              </Typography>
              <Typography variant="h4">78,298</Typography>
              <Stack direction="row" spacing={1} my={1} alignItems="center">
                <Avatar sx={{ bgcolor: successlight, width: 24, height: 24 }}>
                  <IconArrowUpLeft width={18} color="#39B69A" />
                </Avatar>
                <Typography variant="subtitle2" fontWeight="600">
                  +9%
                </Typography>
              </Stack>
              <Box height="80px">
                <Chart options={optionscolumnchart} series={seriescolumnchart} type="bar" height={80} width={"100%"} />
              </Box>
            </>
          </DashboardCard>
        )}
    </>

  );
};

export default Projects;
