import React from 'react';
import { AppState } from '@/store/store';
import { useSelector, useDispatch } from '@/store/hooks';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { SearchContact } from '@/store/apps/contacts/ContactSlice';
import { IconMenu2, IconSearch } from '@tabler/icons-react';

type Props = {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
};

const ContactSearch = ({ onClick }: Props) => {
  const searchTerm = useSelector((state: AppState) => state.contactsReducer.contactSearch);
  const dispatch = useDispatch();

  return (
    <Box display="flex" sx={{ p: 2 }}>
      <Fab
        onClick={onClick}
        color="primary"
        size="small"
        sx={{ mr: 1, flexShrink: '0', display: { xs: 'block', lineHeight: '10px', lg: 'none' } }}
      >
        <IconMenu2 width="16" />
      </Fab>
      <TextField
        id="outlined-basic"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconSearch size={'16'} />
            </InputAdornment>
          ),
        }}
        fullWidth
        size="small"
        value={searchTerm}
        placeholder="Search Contacts"
        variant="outlined"
        onChange={(e) => dispatch(SearchContact(e.target.value))}
      />
    </Box>
  );
};

export default ContactSearch;
