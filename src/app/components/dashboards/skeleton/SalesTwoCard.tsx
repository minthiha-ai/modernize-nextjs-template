import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";

import DashboardCard from "../../shared/DashboardCard";

const SkeletonSalesTwoCard = () => {

    return (
        <DashboardCard>
            <>
                <Skeleton variant="rounded" width={38} height={38} />

                <Box mt={3} mb={1}>
                    <Skeleton variant="rounded" width={110} height={25} />
                </Box>

                <Typography variant="h4" mb={1}>
                    <Skeleton variant="rounded" width={90} height={25} />

                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    <Skeleton variant="rounded" width={55} height={25} />
                </Typography>
            </>
        </DashboardCard>
    );
};

export default SkeletonSalesTwoCard;
