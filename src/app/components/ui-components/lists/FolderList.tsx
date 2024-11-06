import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

import { IconPhoto, IconBriefcase, IconBeach } from '@tabler/icons-react';

const FolderList = () => {
  return (
    <>
      <BlankCard>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <IconPhoto width={20} height={20} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <IconBriefcase width={20} height={20} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <IconBeach width={20} height={20} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </BlankCard>
    </>
  );
};

export default FolderList;
