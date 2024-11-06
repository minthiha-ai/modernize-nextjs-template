import { Stack, Typography, Skeleton, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';

const SkeletonProjectCard = () => {
    return (
        <DashboardCard>
            <>
                <Box mb={2}>
                    <Skeleton variant="rounded" width={90} height={21} />
                </Box>

                <Typography variant="h3" fontWeight="700">
                    <Skeleton variant="rounded" width={80} height={21} />
                </Typography>
                <Stack direction="row" spacing={1} mt={1} mb={3} alignItems="center">
                    <Skeleton variant="rounded" width={85} height={21} />
                </Stack>

                <Skeleton variant="rounded" width={120} height={55} />

            </>
        </DashboardCard>
    );
};

export default SkeletonProjectCard;