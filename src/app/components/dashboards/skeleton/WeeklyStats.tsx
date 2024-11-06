import { Stack, Typography, Box, Skeleton } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';


const SkeletonWeeklyStatsCard = () => {

    return (
        <DashboardCard>
            <>
                <Box mb={1}>
                    <Skeleton variant="rounded" width={112} height={21} />
                </Box>
                <Skeleton variant="rounded" width={112} height={21} />
                <Stack my={4}>
                    <Skeleton variant="rounded" width={300} height={100} />
                </Stack>

                <Stack direction="row" spacing={2} mb={1} alignItems="center">
                    <Skeleton variant="rounded" width={38} height={38} />
                    <Box>
                        <Typography variant="h6" mb={1} fontWeight="600">
                            <Skeleton variant="rounded" width={245} height={25} />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            <Skeleton variant="rounded" width={245} height={25} />
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2} mb={1} alignItems="center">
                    <Skeleton variant="rounded" width={38} height={38} />
                    <Box>
                        <Typography variant="h6" mb={1} fontWeight="600">
                            <Skeleton variant="rounded" width={245} height={25} />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            <Skeleton variant="rounded" width={245} height={25} />
                        </Typography>
                    </Box>
                </Stack>
                <Stack direction="row" spacing={2} mb={1} alignItems="center">
                    <Skeleton variant="rounded" width={38} height={38} />
                    <Box>
                        <Typography variant="h6" mb={1} fontWeight="600">
                            <Skeleton variant="rounded" width={245} height={25} />
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary">
                            <Skeleton variant="rounded" width={245} height={25} />
                        </Typography>
                    </Box>
                </Stack>
            </>
        </DashboardCard>
    );
};

export default SkeletonWeeklyStatsCard;
