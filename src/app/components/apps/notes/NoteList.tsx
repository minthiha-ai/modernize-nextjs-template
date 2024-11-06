import React, { useEffect } from "react";
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "@/store/hooks";
import Scrollbar from "../../custom-scroll/Scrollbar";
import {
  fetchNotes,
  SelectNote,
  DeleteNote,
  SearchNotes,
} from "@/store/apps/notes/NotesSlice";
import { IconTrash } from "@tabler/icons-react";
import { NotesType } from '../../../(DashboardLayout)/types/apps/notes';

const NoteList = () => {
  const dispatch = useDispatch();
  const activeNote = useSelector((state) => state.notesReducer.notesContent);
  const searchTerm = useSelector((state) => state.notesReducer.noteSearch);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const filterNotes = (notes: NotesType[], nSearch: string) => {
    if (nSearch !== "")
      return notes.filter(
        (t: any) =>
          !t.deleted &&
          t.title
            .toLocaleLowerCase()
            .concat(" ")
            .includes(nSearch.toLocaleLowerCase())
      );

    return notes.filter((t) => !t.deleted);
  };

  const notes = useSelector((state) =>
    filterNotes(state.notesReducer.notes, state.notesReducer.noteSearch)
  );
  console.log(notes)
  return (
    <>
      <Box p={3} px={2}>
        <TextField
          id="search"
          value={searchTerm}
          placeholder="Search Notes"
          inputProps={{ "aria-label": "Search Notes" }}
          size="small"
          type="search"
          variant="outlined"
          fullWidth
          onChange={(e) => dispatch(SearchNotes(e.target.value))}
        />
        <Typography variant="h6" mb={0} mt={4} pl={1}>
          All Notes
        </Typography>
      </Box>
      <Box>
        <Scrollbar
          sx={{
            height: { lg: "calc(100vh - 300px)", sm: "100vh" },
            maxHeight: "700px",
          }}
        >
          {notes && notes.length ? (
            notes.map((note, index) => (
              <Box key={note.id} px={2}>
                <Box
                  p={2}
                  sx={{
                    position: "relative",
                    cursor: "pointer",
                    mb: 1,
                    transition: "0.1s ease-in",
                    transform:
                      activeNote === index ? "scale(1)" : "scale(0.95)",
                    backgroundColor: `${note.color}.light`,
                  }}
                  onClick={() => dispatch(SelectNote(index))}
                >
                  <Typography variant="h6" noWrap color={note.color + ".main"}>
                    {note.title}
                  </Typography>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="caption">
                      {new Date(note.datef).toLocaleDateString()}
                    </Typography>
                    <Tooltip title="Delete">
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => dispatch(DeleteNote(note.id))}
                      >
                        <IconTrash width={18} />
                      </IconButton>
                    </Tooltip>
                  </Stack>
                </Box>
              </Box>
            ))
          ) : (
            <Box m={2}>
              <Alert severity="error" variant="filled" sx={{ color: "white" }}>
                No Notes Found!
              </Alert>
            </Box>
          )}
        </Scrollbar>
      </Box>
    </>
  );
};

export default NoteList;
