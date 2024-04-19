import Image from 'next/image';

import classes from './page.module.css';
import { handleGetSpecificPost, handleGetSpecificUser } from '@/lib/data';

export async function generateMetadata({ params }) {
  const slug = params.slug;

  const post = await handleGetSpecificPost(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function SinglePostBlog({ params }) {
  const slug = params.slug;

  const post = await handleGetSpecificPost(slug);

  const user = await handleGetSpecificUser(post.username);

  return (
    <div className={classes.singlePostContainer}>
      <div className={classes.leftContainer}>
        <div className={classes.imgContainer}>
          <Image
            src={post.image ? post.image : '/images/no-image.png'}
            alt={'a ' + post.title + ' image'}
            fill
            className={classes.img}
          />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <h1>{post.title}</h1>
        <div className={classes.details}>
          <div className={classes.avatarContainer}>
            <Image
              src={user.image ? user.image : '/images/user.png'}
              alt='user avatar'
              width={40}
              height={40}
              className={classes.avatarImg}
            />
          </div>
          <div className={classes.infoContainer}>
            <table className={classes.info}>
              <tbody>
                <tr>
                  <th>Author</th>
                  <th>Published</th>
                </tr>
                <tr>
                  <td>{user.username}</td>
                  <td>{post.createdAt.toString().substring(0, 15)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.descriptionContainer}>
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
}
