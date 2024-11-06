'use client'
import React from 'react';
import { defineAbility } from '@casl/ability';
import { Can } from '@casl/react';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import PageContainer from '@/app/components/container/PageContainer';
import { Box, Button, List, ListItem, Stack } from '@mui/material';
import ParentCard from '@/app/components/shared/ParentCard';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'CASL',
  },
];

interface actionType {
  action: string;
  subject: string;
}

interface PermissionType {
  CanEdit: actionType;
  CanDelete: actionType;
}

const permissions: PermissionType | any = {
  CanEdit: {
    action: 'Can-edit',
    subject: 'address',
  },
  CanDelete: {
    action: 'Can-delete',
    subject: 'address',
  },
};

interface userType {
  Admin: {
    permissions: Array<string>;
  };
  Manager: {
    permissions: Array<string>;
  };
  Subscriber: {
    permissions: Array<string>;
  };
}

const users: userType | any = {
  Admin: {
    permissions: ['CanEdit', 'CanDelete'],
  },
  Manager: {
    permissions: ['CanEdit'],
  },
  Subscriber: {
    permissions: [],
  },
};

interface addressType {
  city: string;
  street: string;
  type: string;
}

const addresses: addressType[] = [
  {
    city: 'New York',
    street: '5684 Max Summit',
    type: 'address',
  },
  {
    city: 'Manhatten York',
    street: '5684 Max Summit',
    type: 'address',
  },
  {
    city: 'Canada street York',
    street: '5684 Max Summit',
    type: 'address',
  },
  {
    city: 'Delhi street',
    street: '5684 Max Summit',
    type: 'address',
  },
  {
    city: 'UP Chawk',
    street: '5684 Max Summit',
    type: 'address',
  },
];

const RollbaseCASL = () => {
  const [userId, setUserId] = React.useState(Object.keys(users)[0]);
  const userPermissions = users[userId].permissions.map((id: number) => permissions[id]);

  const actions = [
    ...userPermissions.reduce((collection: any, { action }: { action: any }) => {
      collection.add(action);

      return collection;
    }, new Set()),
  ];

  const ability = defineAbility((can) => {
    userPermissions.forEach(({ action, subject }: { action: any; subject: any }) => {
      can(action, subject);
    });
  });

  return (
    <PageContainer title="Rollbase Access" description="this is Rollbase Access">
      {/* breadcrumb */}
      <Breadcrumb title="Rollbase Access" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Permission Base Access with CASL">
        <>
          <Stack direction={'row'} gap={1}>
            {Object.entries(users).map(([id]) => (
              <Button
                key={id}
                variant={userId !== id ? 'outlined' : 'contained'}
                color="primary"
                onClick={() => setUserId(id)}
              >
                {id}
              </Button>
            ))}
          </Stack>
          <Box p={2} mt={2} bgcolor={'primary.light'}>
            {users[userId].permissions.map((permission: string) => (
              <Box key={permission}>{permission}</Box>
            ))}
          </Box>

          <List>
            {addresses.map(({ city, street, type }) => (
              <ListItem key={city}>
                <Stack direction={'row'} gap={1} alignItems="center">
                  {city}, {street}
                  {actions.map((action) => (
                    <Can I={action} a={type} ability={ability} key={action}>
                      <Button size="small">{action}</Button>
                    </Can>
                  ))}
                </Stack>
              </ListItem>
            ))}
          </List>
        </>
      </ParentCard>
    </PageContainer>
  );
};

export default RollbaseCASL;
