import { Stack, Typography, Skeleton, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';

const SkeletonMonthlyEarningsTwoCard = () => {
    return (
        <DashboardCard>
            <>
                <Box mb={3}>
                    <Skeleton variant="rounded" width={190} height={21} />
                </Box>

                <Typography variant="h3" fontWeight="700">
                    <Skeleton variant="rounded" width={150} height={21} />
                </Typography>
                <Stack direction="row" spacing={1} mt={1} mb={3} alignItems="center">
                    <Skeleton variant="rounded" width={150} height={21} />
                </Stack>

                <Skeleton variant="rounded" width={120} height={70} />

            </>
        </DashboardCard>
    );
};

export default SkeletonMonthlyEarningsTwoCard;