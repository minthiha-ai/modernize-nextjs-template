import React from 'react';
import {
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
  TableHead,
  Chip,
  Box,
  AvatarGroup,
} from '@mui/material';
import BlankCard from '../shared/BlankCard';
import { basicsTableData, TableType } from './tableData';
import { Stack } from '@mui/system';

const basics: TableType[] = basicsTableData;

const Table5 = () => {
  return (
    <BlankCard>
      <TableContainer>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Users</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Project Name</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Team</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Budget</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {basics.map((basic) => (
              <TableRow key={basic.id}>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Avatar src={basic.imgsrc} alt={basic.imgsrc} sx={{ width: 40, height: 40 }} />
                    <Box>
                      <Typography variant="h6" fontWeight="600">
                        {basic.name}
                      </Typography>
                      <Typography color="textSecondary" variant="subtitle2">
                        {basic.post}
                      </Typography>
                    </Box>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6" fontWeight={400}>
                    {basic.pname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Stack direction="row">
                    <AvatarGroup max={4}>
                      {basic.teams?.map((team) => (
                        <Avatar
                          key={team.id}
                          sx={{
                            bgcolor: team.color,
                            width: 35,
                            height: 35,
                          }}
                        >
                          {team.text}
                        </Avatar>
                      ))}
                    </AvatarGroup>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      bgcolor:
                        basic.status === 'Active'
                          ? (theme) => theme.palette.success.light
                          : basic.status === 'Pending'
                          ? (theme) => theme.palette.warning.light
                          : basic.status === 'Completed'
                          ? (theme) => theme.palette.primary.light
                          : basic.status === 'Cancel'
                          ? (theme) => theme.palette.error.light
                          : (theme) => theme.palette.secondary.light,
                      color:
                        basic.status === 'Active'
                          ? (theme) => theme.palette.success.main
                          : basic.status === 'Pending'
                          ? (theme) => theme.palette.warning.main
                          : basic.status === 'Completed'
                          ? (theme) => theme.palette.primary.main
                          : basic.status === 'Cancel'
                          ? (theme) => theme.palette.error.main
                          : (theme) => theme.palette.secondary.main,
                      borderRadius: '8px',
                    }}
                    size="small"
                    label={basic.status}
                  />
                </TableCell>
                <TableCell>
                  <Typography variant="h6">${basic.budget}k</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BlankCard>
  );
};

export default Table5;
