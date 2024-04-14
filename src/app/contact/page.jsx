import Image from 'next/image';

import classes from './page.module.css';

export default function Contact() {
  return (
    <div className={classes.contactContainer}>
      <div className={classes.leftContainer}>
        <Image
          src='/images/contact.png'
          alt='a contact image'
          width={400}
          height={400}
        />
        <div style={{ fontSize: '0.8rem' }}>
          <a
            href='https://www.flaticon.com/free-icons/telemarketing'
            title='telemarketing icons'
            target='_blank'
          >
            Telemarketing icons created by photo3idea_studio - Flaticon
          </a>
        </div>
      </div>
      <div className={classes.rightContainer}>
        <h2>Let's Connect!</h2>
        <form className={classes.form}>
          <input type='text' placeholder='Full Name' required />
          <input type='text' placeholder='Email' required />
          <textarea
            cols='30'
            rows='10'
            placeholder='Message'
            required
          ></textarea>
          <div className={classes.actions}>
            <button type='submit'>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}