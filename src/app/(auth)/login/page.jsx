import Image from 'next/image';
import Link from 'next/link';

import classes from './login.module.css';
import { handleGitHubLogin } from '@/lib/action';
import { handleUserLogin } from '@/lib/action';

export const metadata = {
  title: 'Login',
  description: 'Login description',
};

export default async function Login() {
  return (
    <div className={classes.loginContainer}>
      <h1>Login</h1>
      <div className={classes.loginImgContainer}>
        <Image
          src='/images/login-icon.png'
          alt='a login image'
          width={200}
          height={200}
        />
        <a
          href='https://www.flaticon.com/free-icons/login'
          title='login icons'
          target='_blank'
        >
          Login icons created by Prosymbols Premium - Flaticon
        </a>
      </div>
      <form action={handleUserLogin} className={classes.loginForm}>
        <input type='text' name='username' placeholder='Username' required />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
        />
        <Link href='/register' className={classes.registerLink}>
          Don't have an account?
        </Link>
        <button>Login</button>
      </form>
      <form action={handleGitHubLogin} className={classes.githubForm}>
        <button type='submit'>
          <span className={classes.buttonIcon}>
            <Image
              src='/images/github-icon.png'
              alt='a github image'
              width={20}
              height={20}
            />
          </span>
          <span className={classes.buttonText}>Continue with GitHub</span>
        </button>
      </form>
    </div>
  );
}
