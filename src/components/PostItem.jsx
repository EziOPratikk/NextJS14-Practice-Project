import Link from 'next/link';
import Image from 'next/image';

import classes from './PostItem.module.css';

export default function PostItem(props) {
  return (
    <li className={classes.itemContainer}>
      <div className={classes.imgContainer}>
        <Image
          src={props.post.image ? props.post.image : '/images/no-image.png'}
          alt={'a ' + props.post.title + ' image'}
          width={200}
          height={400}
          quality={100}
          unoptimized={true}
          className={classes.img}
        />
      </div>
      <div className={classes.info}>
        <h3>{props.post.title}</h3>
        <p>{props.post.description}</p>
        <Link href={`/blog/${props.post.slug}`}>READ MORE</Link>
      </div>
    </li>
  );
}
