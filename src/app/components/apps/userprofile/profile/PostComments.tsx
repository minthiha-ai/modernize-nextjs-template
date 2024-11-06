import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { IconArrowBackUp, IconCircle, IconThumbUp } from '@tabler/icons-react';

import { useDispatch } from'@/store/hooks';
import uniqueId from 'lodash/uniqueId';
import { addReply } from '@/store/apps/userProfile/UserProfileSlice';
import {
  PostType,
  Comment as CommentType,
  CommentDataType,
  Reply,
  ProfileType,
} from '../../../../(DashboardLayout)/types/apps/userProfile';

interface CommentProps {
  comment: CommentType | any;
  post: PostType;
}
interface ReplyProps {
  data: CommentDataType;
  reply: Reply[];
  profile: ProfileType;
}
const PostComments = ({ comment, post }: CommentProps) => {
  const [replyTxt, setReplyTxt] = useState<any>('');
  const [showReply, setShowReply] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = async (id: number, commentid: string | any, reply: CommentDataType) => {
    const replyId = uniqueId('#REPLY_');
    const newReply: PostType[] | any = {
      id: replyId,
      profile: {
        id: uniqueId('#REPLY_'),
        avatar: post?.profile.avatar,
        name: post?.profile.name,
        time: 'now',
      },
      data: {
        comment: reply,
        likes: {
          like: false,
          value: 0,
        },
        replies: [],
      },
    };
    dispatch(addReply(id, commentid, newReply));
    setReplyTxt('');
    setShowReply(false);
  };

  return (
    <>
      <Box mt={2} p={3} sx={{ borderColor: (theme: any) => theme.palette.divider, borderWidth: '1px', borderStyle: 'solid' }}>
        <Stack direction={'row'} gap={2} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src={comment?.profile.avatar}
            sx={{ width: '33px', height: '33px' }}
          />
          <Typography variant="h6">{comment?.profile.name}</Typography>
          <Typography variant="caption" color="textSecondary">
            <IconCircle size="7" fill="" fillOpacity={'0.1'} strokeOpacity="0.1" />{' '}
            {comment?.profile.time}
          </Typography>
        </Stack>
        <Box py={2}>
          <Typography color="textSecondary">{comment?.data.comment}</Typography>
        </Box>
        <Stack direction="row" gap={1} alignItems="center">
          <Tooltip title="Like" placement="top">
            <Fab
              size="small"
              color={
                comment?.data && comment?.data.likes && comment?.data.likes.like
                  ? 'primary'
                  : 'inherit'
              }
            >
              <IconThumbUp size="16" />
            </Fab>
          </Tooltip>
          <Typography variant="body1" fontWeight={600}>
            {comment?.data && comment?.data.likes && comment?.data.likes.value}
          </Typography>
          <Tooltip title="Reply" placement="top">
            <Fab sx={{ ml: 2 }} size="small" color="info" onClick={() => setShowReply(!showReply)}>
              <IconArrowBackUp size="16" />
            </Fab>
          </Tooltip>
          {comment?.data.replies.length > 0 ? comment?.data.replies.length : 0}
        </Stack>
      </Box>
      {comment?.data.replies ? (
        <>
          {comment?.data.replies.map((reply: ReplyProps) => {
            return (
              <Box pl={4} key={reply.data.comment}>
                <Box
                  mt={2}
                  p={3}
                  sx={{ borderColor: (theme: any) => theme.palette.grey[100], borderWidth: '1px', borderStyle: 'solid' }}
                >
                  <Stack direction={'row'} gap={2} alignItems="center">
                    <Avatar alt="Remy Sharp" src={reply.profile.avatar} />
                    <Typography variant="h6">{reply.profile.name}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      <IconCircle size="7" fill="" fillOpacity={'0.1'} strokeOpacity="0.1" />{' '}
                      {reply.profile.time}
                    </Typography>
                  </Stack>
                  <Box py={2}>
                    <Typography color="textSecondary">{reply.data.comment}</Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </>
      ) : (
        ''
      )}
      {showReply ? (
        <Box p={2}>
          <Stack direction={'row'} gap={2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={post?.profile.avatar}
              sx={{ width: '33px', height: '33px' }}
            />
            <TextField
              placeholder="Reply"
              value={replyTxt}
              onChange={(e) => setReplyTxt(e.target.value)}
              variant="outlined"
              fullWidth
            />
            <Button variant="contained" onClick={() => onSubmit(post.id, comment.id, replyTxt)}>
              Reply
            </Button>
          </Stack>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

export default PostComments;
