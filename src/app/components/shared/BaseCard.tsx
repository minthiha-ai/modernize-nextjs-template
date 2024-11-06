import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import { useSelector } from '@/store/hooks';
import { AppState } from '@/store/store';

type Props = {
  title: string;
  children: JSX.Element | JSX.Element[];
};

const BaseCard = ({ title, children }: Props) => {
  const customizer = useSelector((state: AppState) => state.customizer);

  return (
    <Card
      sx={{ padding: 0 }}
      elevation={customizer.isCardShadow ? 9 : 0}
      variant={!customizer.isCardShadow ? 'outlined' : undefined}
    >
      <CardHeader title={title} />
      <Divider />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default BaseCard;
