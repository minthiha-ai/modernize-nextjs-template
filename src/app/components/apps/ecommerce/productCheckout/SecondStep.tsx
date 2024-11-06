import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { IconDeviceMobile } from '@tabler/icons-react';

const Myaddress = [
  {
    id: 1,
    name: 'Johnathan Doe',
    address: 'E601 Vrundavan Heights, godrej garden city - 382481',
    mobile: '9999501050',
  },
  {
    id: 2,
    name: 'ParleG Doe',
    address: 'D201 Galexy Heights, godrej garden city - 382481',
    mobile: '9999501050',
  },
  {
    id: 3,
    name: 'Guddu Bhaiya',
    address: 'Mumbai khao gali, Behind shukan, godrej garden city - 382481',
    mobile: '9999501050',
  },
];

interface Props {
  nexStep: (event: React.SyntheticEvent | Event) => void;
}

const SecondStep = ({ nexStep }: Props) => {
  return (
    <>
      <Grid container spacing={3} mb={3} mt={1}>
        {Myaddress.map((address) => (
          <Grid item lg={4} xs={12} key={address.id}>
            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6" mb={2}>
                {address.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {address.address}
              </Typography>
              <Typography variant="h6" my={3} alignItems="center" display="flex" gap={1}>
                <IconDeviceMobile /> {address.mobile}
              </Typography>
              <Button variant="outlined" onClick={nexStep}>
                Deliver To this address
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SecondStep;
