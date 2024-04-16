import { handleUserRegister } from '@/lib/action';
import classes from './page.module.css';

export default function Register() {
  return (
    <div className={classes.registerContainer}>
      <h1>Register</h1>
      <form action={handleUserRegister} className={classes.form}>
        <input type='text' placeholder='Username' name='username' required />
        <input type='email' placeholder='Email' name='email' required />
        <input
          type='url'
          placeholder='Avatar Image URL (optional)'
          name='img-url'
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          required
        />
        <input
          type='password'
          placeholder='Confirm Password'
          name='confirm-password'
          required
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  );
}