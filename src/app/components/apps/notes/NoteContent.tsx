import React from 'react';
import { useSelector, useDispatch } from '@/store/hooks';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import FormLabel from '@mui/material/FormLabel';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { IconCheck, IconMenu2 } from '@tabler/icons-react';

import { UpdateNote } from '@/store/apps/notes/NotesSlice';
import AddNotes from './AddNotes';
import { NotesType } from '../../../(DashboardLayout)/types/apps/notes';

interface colorsType {
  lineColor: string;
  disp: string | any;
  id: number;
}

interface Props {
  toggleNoteSidebar: (event: React.MouseEvent<HTMLElement>) => void,
}

const NoteContent = ({ toggleNoteSidebar }: Props) => {
  const notelength: any = useSelector(
    (state) => state.notesReducer.notes.length-1,
  );
  const noteDetails: NotesType = useSelector(
    (state) => state.notesReducer.notes[state.notesReducer.notesContent>notelength ?  0 : state.notesReducer.notesContent],
  );
  
  const theme = useTheme();

  const dispatch = useDispatch();

  const colorvariation: colorsType[] = [
    {
      id: 1,
      lineColor: theme.palette.warning.main,
      disp: 'warning',
    },
    {
      id: 2,
      lineColor: theme.palette.info.main,
      disp: 'info',
    },
    {
      id: 3,
      lineColor: theme.palette.error.main,
      disp: 'error',
    },
    {
      id: 4,
      lineColor: theme.palette.success.main,
      disp: 'success',
    },
    {
      id: 5,
      lineColor: theme.palette.primary.main,
      disp: 'primary',
    },
  ];

  return (
    <Box sx={{ height: { lg: 'calc(100vh - 250px)', sm: '100vh' }, maxHeight: '700px' }}>
      {/* ------------------------------------------- */}
      {/* Header Part */}
      {/* ------------------------------------------- */}
      <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
        <IconButton onClick={toggleNoteSidebar}>
          <IconMenu2 stroke={1.5} />
        </IconButton>
        <AddNotes colors={colorvariation} />
      </Box>
      <Divider />
      {/* ------------------------------------------- */}
      {/* Edit notes */}
      {/* ------------------------------------------- */}
      {noteDetails ? (
        <Box p={3}>
          <FormLabel htmlFor="outlined-multiline-static">
            <Typography variant="h6" mb={2} fontWeight={600} color="text.primary">
              Edit Note
            </Typography>
          </FormLabel>

          <TextField
            id="outlined-multiline-static"
            placeholder="Edit Note"
            multiline
            fullWidth
            rows={5}
            variant="outlined"
            value={noteDetails.title}
            onChange={(e) => dispatch(UpdateNote(noteDetails.id, 'title', e.target.value))}
          />
          <br />
          <Typography variant="h6" mt={3} mb={2} fontWeight={600}>
            Change Note Color
          </Typography>

          {colorvariation.map((color1) => (
            <Fab
              sx={{
                marginRight: '3px',
                boxShadow: 'none',
                transition: '0.1s ease-in',
                scale: noteDetails.color === color1.disp ? '0.9' : '0.7',
              }}
              size="small"
              key={color1.id}
              color={color1?.disp}
              onClick={() => dispatch(UpdateNote(noteDetails.id, 'color', color1.disp))}
            >
              {noteDetails.color === color1.disp ? <IconCheck width="16" /> : ''}
            </Fab>
          ))}
        </Box>
      ) : (
        <Box sx={{ textAlign: 'center', fontSize: '24px', mt: 2 }}>Select a Note</Box>
      )}
    </Box>
  );
};


export default NoteContent;
