import { unstable_noStore as noStore } from 'next/cache';

import { handleDBConnection } from './db/conn';
import { User } from './models/users';
import { Post } from './models/posts';

export function handleGetPosts() {
  handleDBConnection();

  const posts = Post.find({})
    .then((posts) => {
      return posts;
    })
    .catch((error) => console.log(error));

  return posts;
}

export function handleGetSpecificPost(slug) {
  handleDBConnection();

  const post = Post.findOne({ slug: slug })
    .then((post) => {
      return post;
    })
    .catch((error) => console.log(error));

  return post;
}

export function handleGetUsers() {
  handleDBConnection();

  const users = User.find({})
    .then((users) => {
      return users;
    })
    .catch((error) => console.log(error));

  return users;
}

export function handleGetSpecificUser(id) {
  noStore();

  handleDBConnection();

  const user = User.findById(id)
    .then((user) => {
      return user;
    })
    .catch((error) => console.log(error));

  return user;
}
