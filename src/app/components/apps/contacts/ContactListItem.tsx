import React from 'react';
import { useSelector } from '@/store/hooks';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { IconStar, IconTrash } from '@tabler/icons-react';

type Props = {
  onContactClick: (event: React.MouseEvent<HTMLElement>) => void;
  onStarredClick: React.MouseEventHandler<SVGElement>;
  onDeleteClick: React.MouseEventHandler<SVGElement>;
  id: string | number;
  firstname: string;
  lastname: string;
  image: string;
  department: string;
  starred: boolean;
  active: any;
};

const ContactListItem = ({
  onContactClick,
  onStarredClick,
  onDeleteClick,
  id,
  firstname,
  lastname,
  image,
  department,
  starred,
  active,
}: Props) => {
  const customizer = useSelector((state) => state.customizer);
  const br = `${customizer.borderRadius}px`;

  const theme = useTheme();

  const warningColor = theme.palette.warning.main;

  return (
    <ListItemButton sx={{ mb: 1 }} selected={active}>
      <ListItemAvatar>
        <Avatar alt={image} src={image} />
      </ListItemAvatar>
      <ListItemText>
        <Stack direction="row" gap="10px" alignItems="center">
          <Box mr="auto" onClick={onContactClick}>
            <Typography variant="subtitle1" noWrap fontWeight={600} sx={{ maxWidth: '150px' }}>
              {firstname} {lastname}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {department}
            </Typography>
          </Box>
          <IconStar
            onClick={onStarredClick}
            size="16"
            stroke={1.5}
            style={{ fill: starred ? warningColor : '', stroke: starred ? warningColor : '' }}
          />
          <IconTrash onClick={onDeleteClick} size="16" stroke={1.5} />
        </Stack>
      </ListItemText>
    </ListItemButton>
  );
};


export default ContactListItem;
