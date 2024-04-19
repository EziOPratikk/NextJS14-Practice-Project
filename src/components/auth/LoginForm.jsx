'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';

import BottomRightSnackbar from '@/utils/BottomRightSnackbar';
import classes from './LoginForm.module.css';

export default function LoginForm(props) {
  const [openSnackbar, setIsOpenSnackbar] = useState();
  const [state, formAction] = useFormState(props.onUserLogin, undefined);

  useEffect(() => {
    if (state) {
      setIsOpenSnackbar(true);
    }

    setTimeout(() => {
      setIsOpenSnackbar(false);
    }, 5000);
  }, [state]);

  return (
    <form action={formAction} className={classes.loginForm}>
      <span>{state?.error}</span>
      <input type='text' name='username' placeholder='Username' required />
      <input type='password' name='password' placeholder='Password' required />
      <Link href='/register' className={classes.registerLink}>
        Don't have an account?
      </Link>
      <button>Login</button>
      <BottomRightSnackbar onOpenSnackbar={openSnackbar} state={state} />
    </form>
  );
}
