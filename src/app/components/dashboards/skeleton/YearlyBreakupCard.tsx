import { Grid, Stack, Typography, Skeleton, Box } from '@mui/material';
import DashboardCard from '../../shared/DashboardCard';

const SkeletonYearlyBreakupCard = () => {
    return (
        <DashboardCard>
            <>
                <Box mb={3}>
                    <Skeleton variant="rounded" width={190} height={21} />
                </Box>
                <Grid container spacing={3}>
                    {/* column */}
                    <Grid item xs={7} sm={7}>
                        <Typography variant="h3" fontWeight="700">
                            <Skeleton variant="rounded" width={150} height={21} />
                        </Typography>
                        <Stack direction="row" spacing={1} mt={1} alignItems="center">
                            <Skeleton variant="rounded" width={150} height={21} />
                        </Stack>
                        <Stack spacing={3} mt={3} direction="row">
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Skeleton variant="rounded" width={50} height={21} />
                            </Stack>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Skeleton variant="rounded" width={50} height={21} />
                            </Stack>
                        </Stack>
                    </Grid>
                    {/* column */}
                    <Grid item xs={5} sm={5}>
                        <Skeleton variant="rounded" width={120} height={135} />
                    </Grid>
                </Grid>
            </>
        </DashboardCard>
    );
};

export default SkeletonYearlyBreakupCard;