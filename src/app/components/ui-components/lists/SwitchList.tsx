import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

import { IconWifi, IconBluetooth } from '@tabler/icons-react';

import CustomSwitch from '../../forms/theme-elements/CustomSwitch';

const SwitchList = () => {
  const [checked, setChecked] = React.useState(['wifi']);

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <BlankCard>
        <List subheader={<ListSubheader>Settings</ListSubheader>}>
          <ListItem>
            <ListItemIcon>
              <IconWifi width={20} height={20} />
            </ListItemIcon>
            <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
            <CustomSwitch
              edge="end"
              onChange={handleToggle('wifi')}
              checked={checked.indexOf('wifi') !== -1}
              inputProps={{
                'aria-labelledby': 'switch-list-label-wifi',
              }}
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <IconBluetooth width={20} height={20} />
            </ListItemIcon>
            <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
            <CustomSwitch
              edge="end"
              onChange={handleToggle('bluetooth')}
              checked={checked.indexOf('bluetooth') !== -1}
              inputProps={{
                'aria-labelledby': 'switch-list-label-bluetooth',
              }}
            />
          </ListItem>
        </List>
      </BlankCard>
    </>
  );
};

export default SwitchList;
