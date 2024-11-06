import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { IconPhoto, IconNotebook } from '@tabler/icons-react';
import ChildCard from '../../../../components/shared/ChildCard';

export const PostTextBox = () => {
  return (
    <ChildCard>
      <TextField
        id="outlined-multiline-static"
        placeholder="Share your thoughts"
        multiline
        fullWidth
        rows={4}
      />
      <Stack direction="row" gap={1} mt={2} alignItems="center">
        <Fab size="small" color="primary">
          <IconPhoto size="16" />
        </Fab>
        <Button variant="text" color="inherit" component="label">
          <input hidden accept="image/*" multiple type="file" />
          Photo / Video
        </Button>

        <Button
          variant="text"
          color="inherit"
          component="label"
          startIcon={
            <Fab size="small" color="secondary">
              <IconNotebook size="16" />
            </Fab>
          }
        >
          Article
          <input hidden accept="image/*" multiple type="file" />
        </Button>

        <Button variant="contained" color="primary" sx={{ ml: 'auto' }}>
          Post
        </Button>
      </Stack>
    </ChildCard>
  );
};
