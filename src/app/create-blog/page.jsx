import Image from 'next/image';

import CreateBlogForm from '@/components/CreateBlogForm';
import { handleAddPost } from '@/lib/action';
import classes from './page.module.css';

export default async function CreateBlog() {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.leftContainer}>
        <Image
          src='/images/blog-icon.png'
          alt='a contact image'
          width={350}
          height={350}
        />
        <div style={{ fontSize: '0.8rem' }}>
          <a
            href='https://www.flaticon.com/free-icons/blog'
            title='blog icons'
            target='_blank'
          >
            Blog icons created by Freepik - Flaticon
          </a>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <h2>Create Your Blog</h2>
        <CreateBlogForm onAddPost={handleAddPost} />
      </div>
    </div>
  );
}
