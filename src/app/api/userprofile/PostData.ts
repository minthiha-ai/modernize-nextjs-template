import mock from '../mock';
import { Chance } from 'chance';
import { PostType } from '@/app/(DashboardLayout)/types/apps/userProfile';

const chance = new Chance();

// social profile
const posts: PostType[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: "/images/profile/user-10.jpg",
      name: 'Nirav Joshi',
      time: '15 min ago',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [
        {
          img: "/images/products/s1.jpg",
          featured: true,
        },
      ],
      likes: {
        like: true,
        value: 67,
      },
      comments: [
        {
          id: chance.integer({ min: 1, max: 2000 }),
          profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: "/images/profile/user-3.jpg",
            name: 'Deran Mac',
            time: '8 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: true,
              value: 55,
            },
            replies: [],
          },
        },
        {
          id: chance.integer({ min: 1, max: 2000 }),
          profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: "/images/profile/user-4.jpg",
            name: 'Jonathan Bg',
            time: '5 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: false,
              value: 68,
            },
            replies: [
              {
                id: chance.integer({ min: 1, max: 2000 }),
                profile: {
                  id: chance.integer({ min: 1, max: 2000 }),
                  avatar: "/images/profile/user-5.jpg",
                  name: 'Carry minati',
                  time: 'just now ',
                },
                data: {
                  comment: chance.paragraph({ sentences: 2 }),
                  likes: {
                    like: true,
                    value: 10,
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: "/images/profile/user-5.jpg",
      name: 'Carry Minati',
      time: 'now',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [],
      likes: {
        like: true,
        value: 1,
      },
      comments: [],
    },
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: "/images/profile/user-2.jpg",
      name: 'Genelia Desouza',
      time: '15 min ago ',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [
        {
          img: "/images/products/s2.jpg",
          title: 'Image Title',
        },
        {
          img: "/images/products/s4.jpg",
          title: 'Painter',
        },
      ],
      likes: {
        like: false,
        value: 320,
      },
      comments: [
        {
          id: chance.integer({ min: 1, max: 2000 }),
          profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: "/images/profile/user-3.jpg",
            name: 'Ritesh Deshmukh',
            time: '15 min ago ',
          },
          data: {
            comment: chance.paragraph({ sentences: 2 }),
            likes: {
              like: true,
              value: 65,
            },
            replies: [],
          },
        },
      ],
    },
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: "/images/profile/user-6.jpg",
      name: 'Himesh R',
      time: '15 min ago ',
    },
    data: {
      content: chance.paragraph({ sentences: 2 }),
      images: [],
      video: 'd1-FRj20WBE',
      likes: {
        like: true,
        value: 129,
      },
    },
  },
];

mock.onGet('/api/data/postData').reply(() => {
  return [200, posts];
});

mock.onPost('/api/data/posts/like').reply((config) => {
  try {
    const { postId } = JSON.parse(config.data);
    const postIndex = posts.findIndex((x) => x.id === postId);
    const post = { ...posts[postIndex] };
    post.data = { ...post.data };
    post.data.likes = { ...post.data.likes };
    post.data.likes.like = !post.data.likes.like;
    post.data.likes.value = post.data.likes.like
      ? post.data.likes.value + 1
      : post.data.likes.value - 1;
    posts[postIndex] = post;

    return [200, { posts: [...posts] }];
  } catch (err) {
    console.error(err);

    return [500, { message: 'Internal server error' }];
  }
});

mock.onPost('/api/data/posts/comments/add').reply((config) => {
  try {
    const { postId, comment } = JSON.parse(config.data);
    const postIndex = posts.findIndex((x) => x.id === postId);
    const post = posts[postIndex];
    const cComments = post.data.comments || [];
    post.data.comments = [...cComments, comment];

    return [200, { posts: [...posts] }];
  } catch (err) {
    console.error(err);

    return [500, { message: 'Internal server error' }];
  }
});

mock.onPost('/api/data/posts/replies/add').reply((config) => {
  try {
    const { postId, commentId, reply } = JSON.parse(config.data);
    const postIndex = posts.findIndex((x) => x.id === postId);
    const post = posts[postIndex];
    const cComments = post.data.comments || [];
    const commentIndex = cComments.findIndex((x) => x.id === commentId);
    const comment = cComments[commentIndex];
    if (comment && comment.data && comment.data.replies)
      comment.data.replies = [...comment.data.replies, reply];

    return [200, { posts: [...posts] }];
  } catch (err) {
    console.error(err);

    return [500, { message: 'Internal server error' }];
  }
});

mock.onPost('/api/data/posts/replies/like').reply((config) => {
  try {
    const { postId, commentId } = JSON.parse(config.data);
    const postIndex = posts.findIndex((x) => x.id === postId);
    const post = posts[postIndex];
    const cComments = post.data.comments || [];
    const commentIndex = cComments.findIndex((x) => x.id === commentId);
    const comment = { ...cComments[commentIndex] };

    if (comment && comment.data && comment.data.likes)
      comment.data.likes.like = !comment.data.likes.like;
    if (comment && comment.data && comment.data.likes)
      comment.data.likes.value = comment.data.likes.like
        ? comment.data.likes.value + 1
        : comment.data.likes.value - 1;
    if (post && post.data && post.data.comments) post.data.comments[commentIndex] = comment;

    return [200, { posts: [...posts] }];
  } catch (err) {
    console.error(err);

    return [500, { message: 'Internal server error' }];
  }
});

export default posts;
