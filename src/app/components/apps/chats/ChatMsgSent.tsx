import React from "react";
import { useSelector, useDispatch } from "@/store/hooks";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { EmojiClickData } from "emoji-picker-react";
import {
  IconPaperclip,
  IconPhoto,
  IconSend,
} from "@tabler/icons-react";
import { sendMsg } from "@/store/apps/chat/ChatSlice";

const ChatMsgSent = () => {
  const [msg, setMsg] = React.useState<any>("");
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [chosenEmoji, setChosenEmoji] = React.useState<string>("");

  const onEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    setChosenEmoji(emojiData.unified);
    setMsg(emojiData.emoji);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = useSelector((state) => state.chatReducer.chatContent);

  const handleChatMsgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(e.target.value);
  };

  const newMsg = { id, msg };

  const onChatMsgSubmit = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(sendMsg(newMsg));
    setMsg("");
  };

  return (
    <Box p={2}>
      {/* ------------------------------------------- */}
      {/* sent chat */}
      {/* ------------------------------------------- */}
      <form
        onSubmit={onChatMsgSubmit}
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        {/* ------------------------------------------- */}
        {/* Emoji picker */}
        {/* ------------------------------------------- */}

        <InputBase
          id="msg-sent"
          fullWidth
          value={msg}
          placeholder="Type a Message"
          size="small"
          type="text"
          inputProps={{ "aria-label": "Type a Message" }}
          onChange={handleChatMsgChange.bind(null)}
        />
        <IconButton
          aria-label="delete"
          onClick={() => {
            dispatch(sendMsg(newMsg));
            setMsg("");
          }}
          disabled={!msg}
          color="primary"
        >
          <IconSend stroke={1.5} size="20" />
        </IconButton>
        <IconButton aria-label="delete">
          <IconPhoto stroke={1.5} size="20" />
        </IconButton>
        <IconButton aria-label="delete">
          <IconPaperclip stroke={1.5} size="20" />
        </IconButton>
      </form>
    </Box>
  );
};

export default ChatMsgSent;
