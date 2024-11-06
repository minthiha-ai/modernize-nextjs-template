"use client"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import PageContainer from '@/app/components/container/PageContainer';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import ParentCard from '@/app/components/shared/ParentCard';
import React from "react";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Line Chart",
  },
];

const LineChart = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  const optionslinechart: any = {
    chart: {
      height: 350,
      type: "line",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
      zoom: {
        type: "x",
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      shadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 1,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      title: {
        text: "Month",
      },
    },
    grid: {
      show: false,
    },
    colors: [primary, secondary],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "straight",
      width: "2",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
    tooltip: {
      theme: "dark",
    },
  };
  const serieslinechart: any = [
    {
      name: "High - 2013",
      data: [28, 29, 33, 36, 32, 32, 33],
    },
    {
      name: "Low - 2013",
      data: [12, 11, 14, 18, 17, 13, 13],
    },
  ];

  return (
    <PageContainer title="Line Chart" description="this is Line Chart">
      {/* breadcrumb */}
      <Breadcrumb title="Line Chart" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Line Chart">
        <Chart
          options={optionslinechart}
          series={serieslinechart}
          type="line"
          height="308px"
          width={"90%"}
        />
      </ParentCard>
    </PageContainer>
  );
};

export default LineChart;
