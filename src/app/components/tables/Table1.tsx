import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  Chip,
  LinearProgress,
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
} from '@mui/material';
import BlankCard from '../shared/BlankCard';
import { Box, Stack } from '@mui/system';
import {
  IconArrowBackUp,
  IconCheck,
  IconDotsVertical,
  IconEdit,
  IconPlus,
  IconTrash,
  IconX,
} from '@tabler/icons-react';

const rows = [
  {
    no: 3066,
    status: 'paid',
    avatar: "/images/profile/user-2.jpg",
    cname: 'Olivia Rhye',
    email: 'olivia@ui.com',
    percent: 60,
  },
  {
    no: 3067,
    status: 'cancelled',
    avatar: "/images/profile/user-3.jpg",
    cname: 'Barbara Steele',
    email: 'steele@ui.com',
    percent: 30,
  },
  {
    no: 3068,
    status: 'paid',
    avatar: "/images/profile/user-4.jpg",
    cname: 'Leonard Gordon',
    email: 'olivia@ui.com',
    percent: 45,
  },
  {
    no: 3069,
    status: 'refunded',
    avatar: "/images/profile/user-5.jpg",
    cname: 'Evelyn Pope',
    email: 'steele@ui.com',
    percent: 37,
  },
  {
    no: 3070,
    status: 'cancelled',
    avatar: "/images/profile/user-7.jpg",
    cname: 'Tommy Garza',
    email: 'olivia@ui.com',
    percent: 87,
  },
  {
    no: 3071,
    status: 'refunded',
    avatar: "/images/profile/user-8.jpg",
    cname: 'Isabel Vasquez',
    email: 'steele@ui.com',
    percent: 32,
  },
];

const Table1 = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <BlankCard>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Invoice</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Customer</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Progress</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.no} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope="row">
                  <Typography variant="subtitle1" color="textPrimary" fontWeight={600}>
                    INV-{row.no}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    icon={
                      row.status == 'paid' ? (
                        <IconCheck width={16} />
                      ) : row.status == 'cancelled' ? (
                        <IconX width={16} />
                      ) : (
                        <IconArrowBackUp width={16} />
                      )
                    }
                    sx={{
                      backgroundColor:
                        row.status == 'paid'
                          ? (theme) => theme.palette.primary.light
                          : row.status == 'cancelled'
                          ? (theme) => theme.palette.error.light
                          : (theme) => theme.palette.secondary.light,
                      color:
                        row.status == 'paid'
                          ? (theme) => theme.palette.primary.main
                          : row.status == 'cancelled'
                          ? (theme) => theme.palette.error.main
                          : (theme) => theme.palette.secondary.main,
                      '.MuiChip-icon': {
                        color: 'inherit !important',
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={row.avatar} alt={row.avatar} sx={{ width: 42, height: 42 }} />
                    <Box>
                      <Typography variant="h6">{row.cname}</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {row.email}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Box width="100%">
                      <LinearProgress variant="determinate" value={row.percent} color="primary" />
                    </Box>
                    <Typography variant="subtitle2" color="textSecondary">
                      {row.percent}%
                    </Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <IconButton
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    <IconDotsVertical width={18} />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconPlus width={18} />
                      </ListItemIcon>
                      Add
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconEdit width={18} />
                      </ListItemIcon>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <IconTrash width={18} />
                      </ListItemIcon>
                      Delete
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BlankCard>
  );
};

export default Table1;
