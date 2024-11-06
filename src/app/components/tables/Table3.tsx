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
  Menu,
  MenuItem,
  IconButton,
  ListItemIcon,
} from '@mui/material';
import BlankCard from '../shared/BlankCard';
import { Box, Stack } from '@mui/system';
import { IconCircle, IconClock, IconDots, IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';

const rows = [
  {
    status: 'active',
    avatar: "/images/profile/user-2.jpg",
    tag: 'rhye',
    cname: 'Olivia Rhye',
    email: 'olivia@ui.com',
    teams: [
      { name: 'Design', bgcolor: 'primary.main' },
      { name: 'Product', bgcolor: 'secondary.main' },
    ],
  },
  {
    status: 'offline',
    avatar: "/images/profile/user-3.jpg",
    tag: 'steele',
    cname: 'Barbara Steele',
    email: 'steele@ui.com',
    teams: [
      { name: 'Product', bgcolor: 'secondary.main' },
      { name: 'Operations', bgcolor: 'error.main' },
    ],
  },
  {
    status: 'active',
    avatar: "/images/profile/user-4.jpg",
    tag: 'gordon',
    cname: 'Leonard Gordon',
    email: 'olivia@ui.com',
    teams: [
      { name: 'Finance', bgcolor: 'primary.main' },
      { name: 'Customer Success', bgcolor: 'success.main' },
    ],
  },
  {
    status: 'offline',
    avatar: "/images/profile/user-5.jpg",
    tag: 'pope',
    cname: 'Evelyn Pope',
    email: 'steele@ui.com',
    teams: [
      { name: 'Operations', bgcolor: 'error.main' },
      { name: 'Design', bgcolor: 'primary.main' },
    ],
  },
  {
    status: 'active',
    avatar: "/images/profile/user-7.jpg",
    tag: 'garza',
    cname: 'Tommy Garza',
    email: 'olivia@ui.com',
    teams: [{ name: 'Product', bgcolor: 'secondary.main' }],
  },
  {
    status: 'active',
    avatar: "/images/profile/user-8.jpg",
    tag: 'vasquez',
    cname: 'Isabel Vasquez',
    email: 'steele@ui.com',
    teams: [{ name: 'Customer Success', bgcolor: 'success.main' }],
  },
];

const Table3 = () => {
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
                <Typography variant="h6">Customer</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Email Address</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Teams</Typography>
              </TableCell>

              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.cname} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={row.avatar} alt={row.avatar} sx={{ width: 42, height: 42 }} />
                    <Box> 
                      <Typography variant="h6">{row.cname}</Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        @{row.tag}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    size="small"
                    icon={
                      row.status == 'active' ? <IconCircle width={14} /> : <IconClock width={14} />
                    }
                    sx={{
                      backgroundColor:
                        row.status == 'active'
                          ? (theme) => theme.palette.success.light
                          : (theme) => theme.palette.grey[100],
                      color:
                        row.status == 'active'
                          ? (theme) => theme.palette.success.main
                          : (theme) => theme.palette.grey[500],
                      '.MuiChip-icon': {
                        color: 'inherit !important',
                      },
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" color="textSecondary">
                    {row.email}
                  </Typography>
                </TableCell>
                <TableCell scope="row">
                  <Stack direction="row" spacing={1}>
                    {row.teams.map((team, i) => (
                      <Chip
                        label={team.name}
                        sx={{ backgroundColor: team.bgcolor, color: 'white', fontSize: '11px' }}
                        key={i}
                        size="small"
                      />
                    ))}
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
                    <IconDots width={18} />
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

export default Table3;
