import Image from 'next/image';

import classes from './page.module.css';

export default function Home() {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.leftContainer}>
        <h1>Creative World Arrives!</h1>
        <p>
          Creativity is a characteristic of someone or some process that forms
          something new and valuable. The created item may be intangible or a
          physical object. Scholarly interest in creativity is found in a number
          of disciplines, primarily psychology, business studies, and cognitive
          science.
        </p>
        <div className={classes.btnContainer}>
          <button>Learn More</button>
          <button>Get in Touch</button>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <Image
          src='/images/inspiration.png'
          alt='right image'
          width={400}
          height={400}
        />
        <div style={{ fontSize: '0.8rem' }}>
          <a
            href='https://www.flaticon.com/free-icons/creativity'
            title='creativity icons'
            target='_blank'
          >
            Creativity icons created by photo3idea_studio - Flaticon
          </a>
        </div>
      </div>
    </div>
  );
}
