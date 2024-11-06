import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { IconFolder, IconActivity, IconTag } from '@tabler/icons-react';

const EmailActions = () => {
  return (
    <Box sx={{ p: 2 }}>
      <ButtonGroup size="small" aria-label="small button group" fullWidth>
        {/* ------------------------------------------- */}
        {/* Action buttons */}
        {/* ------------------------------------------- */}
        <Button key="one">
          <IconActivity width="17" />
        </Button>
        <Button key="two">
          <IconFolder width="17" />
        </Button>
        <Button key="three">
          <IconTag width="17" />
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default EmailActions;
