import Image from 'next/image';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { handleGetPosts } from '@/lib/data';
import { handleDeletePost } from '@/lib/action';
import classes from './List.module.css';

export default async function PostList() {
  const posts = await handleGetPosts();

  return (
    <ul className={classes.postsContainer}>
      <h2>Posts</h2>
      {posts.map((post) => (
        <li className={classes.infoContainer} key={post._id}>
          <div className={classes.leftContainer}>
            <Image
              src={post.image ? post.image : '/images/no-image.png'}
              alt={'a ' + post.title + ' image'}
              width={40}
              height={40}
              className={classes.img}
            />
            <p>
              {post.title} <span>Author: {post.username}</span>
            </p>
          </div>
          <div className={classes.rightContainer}>
            <form action={handleDeletePost}>
              <input type='hidden' name='pid' value={post._id.toString()} />
              <button>
                <DeleteForeverIcon
                  className={classes.deleteIcon}
                  fontSize='large'
                />
              </button>
            </form>
          </div>
        </li>
      ))}
    </ul>
  );
}
