"use client"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import ParentCard from '@/app/components/shared/ParentCard';
import React from "react";

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Gradient Chart',
  },
];

const Gradient = () => {

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  
  const optionsgredientchart: any = {
    chart: {
      height: 350,
      type: 'line',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        color: 'rgba(0,0,0,0.2)',
        top: 12,
        left: 4,
        blur: 3,
        opacity: 0.4,
      },
    },
    stroke: {
      width: 7,
      curve: 'smooth',
    },

    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [primary],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 0.9,
        stops: [0, 100, 100, 100],
      },
    },
    markers: {
      size: 4,
      opacity: 0.9,
      colors: [primary],
      strokeColor: '#fff',
      strokeWidth: 2,

      hover: {
        size: 7,
      },
    },
    yaxis: {
      min: 0,
      max: 40,
    },
    tooltip: {
      theme: 'dark',
    },
    grid: {
      show: false,
    },
  };
  const seriesgredientchart: any = [
    {
      name: 'Likes',
      data: [4, 3, 10, 9, 35, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];

  return (
    <PageContainer title="Gradient Chart" description="this is Gradient Chart">
      {/* breadcrumb */}
      <Breadcrumb title="Gradient Chart" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title='Gradient Chart'>
        <Chart
          options={optionsgredientchart}
          series={seriesgredientchart}
          type="line"
          height="300px"
          width={"100%"}
        />
      </ParentCard>
    </PageContainer>
  );
};

export default Gradient;
