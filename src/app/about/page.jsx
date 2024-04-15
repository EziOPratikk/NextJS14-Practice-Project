import Image from 'next/image';

import classes from './page.module.css';

export const metadata = {
  title: 'About Page',
  description: 'About description',
};

export default function About() {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.leftContainer}>
        <h1>About Agency</h1>
        <h2>
          We create digital ideas that are bigger, bolder, braver and better.
        </h2>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas, flexibility and precision. We're special team
          with best consulting and finance. We provide wide range of services to
          our clients.
        </p>
        <div className={classes.gridBoxContainer}>
          <div className={classes.gridBoxItem}>
            <h3>7 Years+</h3>
            <p>Innovation, efficiency, growth</p>
          </div>
          <div className={classes.gridBoxItem}>
            <h3> 5 Years+</h3>
            <p>Experience & adaptability</p>
          </div>
          <div className={classes.gridBoxItem}>
            <h3>8 Years+</h3>
            <p>Success, collaboration, quality</p>
          </div>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <Image
          src='/images/agency.png'
          alt='right image'
          width={400}
          height={400}
        />
        <div style={{ fontSize: '0.8rem' }}>
          <a
            href='https://www.flaticon.com/free-icons/travel-agency'
            title='travel agency icons'
            target='_blank'
          >
            Travel agency icons created by photo3idea_studio - Flaticon
          </a>
        </div>
      </div>
    </div>
  );
}
