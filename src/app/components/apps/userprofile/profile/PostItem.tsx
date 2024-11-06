import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { IconCircle, IconMessage2, IconShare, IconThumbUp } from '@tabler/icons-react';
import uniqueId from 'lodash/uniqueId';
import { useDispatch, useSelector } from'@/store/hooks';
import { likePosts, addComment } from '@/store/apps/userProfile/UserProfileSlice';
import PostComments from './PostComments';
import BlankCard from '../../../shared/BlankCard';
import { Comment as CommentType, PostType } from '../../../../(DashboardLayout)/types/apps/userProfile';

interface Props {
  post: PostType;
}

const PostItem = ({ post }: Props) => {
  const dispatch = useDispatch();
  const customizer = useSelector((state) => state.customizer);
  const handleLike = async (postId: number) => {
    dispatch(likePosts(postId));
  };
  const [comText, setComText] = useState<any>('');

  const onSubmit = async (id: number, comment: CommentType) => {
    const commentId = uniqueId('#COMMENT_');
    const newComment: any = {
      id: commentId,
      profile: {
        id: uniqueId('#COMMENT_'),
        avatar: post?.profile.avatar,
        name: post?.profile.name,
        time: 'now',
      },
      data: {
        comment: comment,
        likes: {
          like: false,
          value: 0,
        },
        replies: [],
      },
    };

    dispatch(addComment(id, newComment));
    setComText('');
  };

  return (
    <BlankCard>
    <Box p={3}>
      <Stack direction={'row'} gap={2} alignItems="center">
        <Avatar alt="Remy Sharp" src={post?.profile.avatar} />
        <Typography variant="h6">{post?.profile.name}</Typography>
        <Typography variant="caption" color="textSecondary">
          <IconCircle size="7" fill="" fillOpacity={'0.1'} strokeOpacity="0.1" />{' '}
          {post?.profile.time}
        </Typography>
      </Stack>
      {/**Post Content**/}
      <Box py={2}>{post?.data.content}</Box>
      {/**If Post has Image**/}
      {post.data.images.length > 0 ? (
        <Box>
          <Grid container spacing={3} mb={2}>
            {post?.data.images.map((photo) => {
              return (
                <Grid item sm={12} lg={photo.featured ? 12 : 6} key={photo.img}>
                  <CardMedia
                    component="img"
                    sx={{ borderRadius: customizer.borderRadius / 4, height: 360 }}
                    image={photo.img}
                    alt="cover"
                    width={'100%'}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        ''
      )}
      {/**If Post has Video**/}
      {post?.data.video ? (
        <CardMedia
          sx={{
            borderRadius: customizer.borderRadius / 4,
            height: 300,
            mb: 2,
          }}
          component="iframe"
          src={`https://www.youtube.com/embed/${post?.data.video}`}
        />
      ) : (
        ''
      )}
      {/**Post Like Comment Share buttons**/}
      <Box>
        <Stack direction="row" gap={1} alignItems="center">
          <Tooltip title="Like" placement="top">
            <Fab
              size="small"
              color={
                post?.data && post?.data.likes && post?.data.likes.like ? 'primary' : 'inherit'
              }
              onClick={() => handleLike(post?.id)}
            >
              <IconThumbUp size="16" />
            </Fab>
          </Tooltip>
          <Typography variant="body1" fontWeight={600}>
            {post?.data && post?.data.likes && post?.data.likes.value}
          </Typography>
          <Tooltip title="Comment" placement="top">
            <Fab sx={{ ml: 2 }} size="small" color="secondary">
              <IconMessage2 size="16" />
            </Fab>
          </Tooltip>
          <Typography variant="body1" fontWeight={600}>
            {post?.data.comments ? post?.data.comments.length : 0}
          </Typography>
          <Tooltip title="Share" placement="top">
            <IconButton sx={{ ml: 'auto' }}>
              <IconShare size="16" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>
      {/**Comments if any**/}
      <Box>
        {post?.data.comments ? (
          <>
            {post?.data.comments.map((comment) => {
              return <PostComments comment={comment} key={comment.id} post={post} />;
            })}
          </>
        ) : (
          ''
        )}
      </Box>
    </Box>
    <Divider />
    <Box p={2}>
      <Stack direction={'row'} gap={2} alignItems="center">
        <Avatar
          alt="Remy Sharp"
          src={post?.profile.avatar}
          sx={{ width: '33px', height: '33px' }}
        />
        <TextField
          placeholder="Comment"
          value={comText}
          onChange={(e) => setComText(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" onClick={() => onSubmit(post?.id, comText)}>
          Comment
        </Button>
      </Stack>
    </Box>
  </BlankCard>
  );
};


export default PostItem;
