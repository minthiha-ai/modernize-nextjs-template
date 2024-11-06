import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import ChildCard from '../../../../components/shared/ChildCard';
import Image from 'next/image';

const photos = [
  {
    img: "/images/profile/user-10.jpg",
    id: 1,
  },
  {
    img: "/images/profile/user-2.jpg",
    id: 2,
  },
  {
    img: "/images/profile/user-3.jpg",
    id: 3,
  },
  {
    img: "/images/profile/user-4.jpg",
    id: 4,
  },
  {
    img: "/images/profile/user-5.jpg",
    id: 5,
  },
  {
    img: "/images/profile/user-6.jpg",
    id: 6,
  },
  {
    img: "/images/profile/user-7.jpg",
    id: 7,
  },
  {
    img: "/images/profile/user-8.jpg",
    id: 8,
  },
  {
    img: "/images/profile/user-9.jpg",
    id: 9,
  },
];

const PhotosCard = () => {

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ChildCard>
      <Typography variant="h4">Photos</Typography>
      <ImageList cols={3} gap={20}>
        {photos.map((photo) => (
          <Box key={photo.id}>
            {
              isLoading ? (
                <>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width="100%"
                    height={93}
                    key={photo.id}
                  ></Skeleton>
                </>
              ) : (
                <ImageListItem key={photo.id}>
                  <Image
                    src={photo.img}
                    alt={photo.img} width={92} height={92}
                    loading="lazy" style={{ borderRadius: 8 }}
                  />
                </ImageListItem>
              )}
          </Box>
        ))}
      </ImageList>
    </ChildCard >
  )
};

export default PhotosCard;
