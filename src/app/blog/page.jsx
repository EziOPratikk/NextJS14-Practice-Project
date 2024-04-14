import PostItem from '@/components/PostItem';
import { handleGetPosts } from '@/lib/data';
import classes from './page.module.css';

export default async function Blog() {
  const posts = await handleGetPosts();

  if (posts.length === 0) {
    return (
      <div style={{ textAlign: 'center' }}>
        No posts available at the moment...
      </div>
    );
  }

  return (
    <main className={classes.blogContainer}>
      <h1>Our Blogs</h1>
      <ul>
        <div className={classes.postGrid}>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </ul>
    </main>
  );
}