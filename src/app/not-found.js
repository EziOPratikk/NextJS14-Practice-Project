import Link from 'next/link';
import Image from 'next/image';

import Button from '@mui/material/Button';

import classes from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={classes.notFoundContainer}>
      <Image
        src='/images/error-404.png'
        alt='a page not found icon'
        width={350}
        height={350}
      ></Image>
      <a
        href='https://www.flaticon.com/free-icons/error'
        title='error icons'
        target='_blank'
      >
        Error icons created by smashingstocks - Flaticon
      </a>
      <Link href='/'>
        <Button variant='text' style={{ color: 'var(--btn-color)' }}>
          Return Home
        </Button>
      </Link>
    </div>
  );
}