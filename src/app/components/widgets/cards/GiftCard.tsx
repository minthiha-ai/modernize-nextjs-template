import { CardContent, Typography, Grid, Button, CardMedia, IconButton } from '@mui/material';
import { Stack } from '@mui/system';
import BlankCard from '../../shared/BlankCard';
import { IconGift } from '@tabler/icons-react';

const giftCard = [
  {
    title: 'Andrew Grant',
    avatar: "/images/products/s1.jpg",
  },
  {
    title: 'Leo Pratt',
    avatar: "/images/products/s2.jpg",
  },
];

const GiftCard = () => {
  return (
    <Grid container spacing={3}>
      {giftCard.map((card, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <BlankCard>
            <CardContent>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <Typography variant="h6" mb={1}>
                  {card.title}
                </Typography>

                <IconButton color="secondary">
                  <IconGift width={20} />
                </IconButton>
              </Stack>
              <CardMedia component="img" image={card.avatar} sx={{ height: 160, borderRadius: 2 }} />

              <Stack spacing={2} mt={3}>
                <Button size="large" variant="contained" color="primary">
                  Gift to Friend ($50.00)
                </Button>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default GiftCard;
