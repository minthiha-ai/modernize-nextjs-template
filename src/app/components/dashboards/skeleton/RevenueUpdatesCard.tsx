import React from "react";
import { Stack, Box, Skeleton } from "@mui/material";
import DashboardCard from "../../shared/DashboardCard";

const SkeletonRevenueUpdatesCards = () => {
    return (
        <DashboardCard>
            <>
                <Stack direction="row" spacing={3}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Skeleton variant="circular" width={9} height={9} />
                        <Box ml={2}>
                            <Skeleton variant="rounded" width={112} height={21} />
                        </Box>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Skeleton variant="circular" width={9} height={9} />
                        <Box ml={2}>
                            <Skeleton variant="rounded" width={112} height={21} />
                        </Box>
                    </Stack>
                </Stack>
                <Box className="rounded-bars" mt={3}>
                    <Skeleton variant="rounded" width={310} height={380} />
                </Box>
            </>
        </DashboardCard>
    );
};

export default SkeletonRevenueUpdatesCards;
