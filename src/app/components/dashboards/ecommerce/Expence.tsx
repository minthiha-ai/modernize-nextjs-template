import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from "@mui/material/styles";
import { Typography, Box } from "@mui/material";
import { Props } from "react-apexcharts";

import DashboardCard from "../../shared/DashboardCard";
import SkeletonExpenceCard from "../skeleton/ExpanceCard";

interface ExpanceCardProps {
  isLoading: boolean;
}

const Expence = ({ isLoading }: ExpanceCardProps) => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const error = theme.palette.error.main;

  // chart
  const optionsexpencechart: any = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",

      toolbar: {
        show: false,
      },
      height: 120,
    },
    labels: ["Profit", "Revenue", "Expance"],
    colors: [primary, error, secondary],
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
          background: "transparent",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: theme.palette.mode === "dark" ? "dark" : "light",
      fillSeriesColor: false,
    },
  };
  const seriesexpencechart = [60, 25, 15];

  return (
    <>
      {isLoading ? (
        <SkeletonExpenceCard />
      ) : (
        <DashboardCard>
          <>
            <Typography variant="h4">$10,230</Typography>
            <Typography variant="subtitle2" color="textSecondary" mb={2}>
              Expense
            </Typography>
            <Box height="100px">
              <Chart
                options={optionsexpencechart}
                series={seriesexpencechart}
                type="donut"
                height="120px"
                width={"100%"}
              />
            </Box>
          </>
        </DashboardCard>
      )}
    </>
  );
};

export default Expence;
