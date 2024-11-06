import React from 'react';

import { Skeleton, Box, Stack, Typography } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';

const SkeletonYearlySalesCard = () => {

    return (
        <DashboardCard>
            <>
                <Box mb={1}>
                    <Skeleton variant="rounded" width={90} height={21} />
                </Box>
                <Box mb={1}>
                    <Skeleton variant="rounded" width={90} height={21} />
                </Box>
                <Skeleton variant="rounded" width={300} height={245} />

                <Stack direction="row" spacing={2} justifyContent="space-between" mt={7}>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Skeleton variant="rounded" width={38} height={38} />
                        <Box>
                            <Typography variant="h6" mb={1} fontWeight="600">
                                <Skeleton variant="rounded" width={55} height={25} />
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                <Skeleton variant="rounded" width={55} height={25} />
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Skeleton variant="rounded" width={38} height={38} />
                        <Box>
                            <Typography variant="h6" mb={1} fontWeight="600">
                                <Skeleton variant="rounded" width={55} height={25} />
                            </Typography>
                            <Typography variant="subtitle2" color="textSecondary">
                                <Skeleton variant="rounded" width={55} height={25} />
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>

            </>
        </DashboardCard>
    );
};

export default SkeletonYearlySalesCard;
