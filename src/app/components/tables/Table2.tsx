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
  AvatarGroup,
} from '@mui/material';
import BlankCard from '../shared/BlankCard';
import { Box, Stack } from '@mui/system';
import { IconDotsVertical, IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';

const rows = [
  {
    status: 'active',
    avatar: "/images/profile/user-2.jpg",
    name: 'Olivia Rhye',
    project: 'Xtreme admin',
    percent: 60,
    users: [{ img: "/images/profile/user-3.jpg" }, { img: "/images/profile/user-2.jpg" }],
  },
  {
    status: 'cancel',
    avatar: "/images/profile/user-3.jpg",
    name: 'Barbara Steele',
    project: 'Adminpro admin',
    percent: 30,
    users: [{ img: "/images/profile/user-4.jpg" }, { img: "/images/profile/user-2.jpg" }, { img: "/images/profile/user-3.jpg" }],
  },
  {
    status: 'active',
    avatar: "/images/profile/user-4.jpg",
    name: 'Leonard Gordon',
    project: 'Monster admin',
    percent: 45,
    users: [{ img: "/images/profile/user-3.jpg" }, { img: "/images/profile/user-2.jpg" }],
  },
  {
    status: 'pending',
    avatar: "/images/profile/user-5.jpg",
    name: 'Evelyn Pope',
    project: 'Materialpro admin',
    percent: 37,
    users: [{ img: "/images/profile/user-6.jpg" }, { img: "/images/profile/user-2.jpg" }, { img: "/images/profile/user-3.jpg" }],
  },
  {
    status: 'cancel',
    avatar: "/images/profile/user-7.jpg",
    name: 'Tommy Garza',
    project: 'Elegant admin',
    percent: 87,
    users: [{ img: "/images/profile/user-5.jpg" }, { img: "/images/profile/user-6.jpg" }],
  },
  {
    status: 'pending',
    avatar: "/images/profile/user-8.jpg",
    name: 'Isabel Vasquez',
    project: 'Modernize admin',
    percent: 32,
    users: [{ img: "/images/profile/user-2.jpg" }, { img: "/images/profile/user-4.jpg" }],
  },
];

const Table2 = () => {
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
                <Typography variant="h6">User</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Project Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Users</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar src={row.avatar} alt={row.avatar} sx={{ width: 42, height: 42 }} />
                    <Box>
                      <Typography variant="h6">{row.name}</Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell scope="row">
                  <Typography variant="subtitle1" color="textSecondary">
                    {row.project}
                  </Typography>
                </TableCell>
                <TableCell>
                  <AvatarGroup sx={{ justifyContent: 'start' }}>
                    {row.users.map((user, i) => (
                      <Avatar
                        src={user.img}
                        alt={user.img}
                        key={i}
                        sx={{ width: 35, height: 35 }}
                      />
                    ))}
                  </AvatarGroup>
                </TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    sx={{
                      backgroundColor:
                        row.status == 'active'
                          ? (theme) => theme.palette.primary.light
                          : row.status == 'cancel'
                          ? (theme) => theme.palette.error.light
                          : (theme) => theme.palette.success.light,
                      color:
                        row.status == 'active'
                          ? (theme) => theme.palette.primary.main
                          : row.status == 'cancel'
                          ? (theme) => theme.palette.error.main
                          : (theme) => theme.palette.success.main,
                    }}
                  />
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

export default Table2;
