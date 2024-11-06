import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import BlankCard from '../../../../components/shared/BlankCard';
import { useSelector, useDispatch } from'@/store/hooks';
import { fetchFollwores, onToggleFollow } from '@/store/apps/userProfile/UserProfileSlice';
import { IconMapPin, IconSearch } from '@tabler/icons-react';
import { userType } from '../../../../(DashboardLayout)/types/apps/users';

const FollowerCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFollwores());
  }, [dispatch]);

  const filterFollowers = (followers: userType[], cSearch: string) => {
    if (followers)
      return followers.filter((t) =>
        t.name.toLocaleLowerCase().includes(cSearch.toLocaleLowerCase()),
      );

    return followers;
  };
  const [search, setSearch] = React.useState('');
  const getFollowers = useSelector((state) =>
    filterFollowers(state.userpostsReducer.followers, search),
  );

  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={12} lg={12}>
          <Stack direction="row" alignItems={'center'} mt={2}>
            <Box>
              <Typography variant="h3">
                Followers &nbsp;
                <Chip label={getFollowers.length} color="secondary" size="small" />
              </Typography>
            </Box>
            <Box ml="auto">
              <TextField
                id="outlined-search"
                placeholder="Search Followers"
                size="small"
                type="search"
                variant="outlined"
                inputProps={{ 'aria-label': 'Search Followers' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconSearch size="14" />
                    </InputAdornment>
                  ),
                }}
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
              />
            </Box>
          </Stack>
        </Grid>
        {getFollowers.map((profile) => {
          return (
            <Grid item xs={12} lg={4} key={profile.id}>
              <BlankCard>
                <CardContent>
                  <Stack direction={'row'} gap={2} alignItems="center">
                    <Avatar alt="Remy Sharp" src={profile.avatar} sx={{width: 40, height: 40}} />
                    <Box>
                    <Typography variant="h6" textOverflow={'ellipsis'} noWrap>{profile.name}</Typography>
                      <Typography
                        variant="caption"
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                      >
                        <IconMapPin size="14" />
                        {profile.country}
                      </Typography>
                    </Box>
                    <Box ml="auto">
                      {profile.isFollowed ? (
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          onClick={() => dispatch(onToggleFollow(profile.id))}
                        >
                          Followed
                        </Button>
                      ) : (
                        <Button
                          variant="outlined"
                          color="primary"
                          size="small"
                          onClick={() => dispatch(onToggleFollow(profile.id))}
                        >
                          Follow
                        </Button>
                      )}
                    </Box>
                  </Stack>
                </CardContent>
              </BlankCard>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FollowerCard;
