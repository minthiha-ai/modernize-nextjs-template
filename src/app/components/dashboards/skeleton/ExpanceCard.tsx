import React from 'react';
import { Skeleton, Typography } from '@mui/material';

import DashboardCard from '../../shared/DashboardCard';

const SkeletonExpenceCard = () => {

  return (
    <DashboardCard>
      <>
        <Typography variant="h4" mb={1}><Skeleton variant="rounded" width={112} height={25} /></Typography>
        <Typography variant="subtitle2" color="textSecondary" mb={2}>
        <Skeleton variant="rounded" width={112} height={21} />
        </Typography>
        <Skeleton variant="rounded" width={112} height={90} />
      </>
    </DashboardCard>
  );
};

export default SkeletonExpenceCard;
