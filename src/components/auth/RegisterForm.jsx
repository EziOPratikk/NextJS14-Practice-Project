'use client';

import { useRouter } from 'next/navigation';

import BottomRightSnackbar from '@/utils/BottomRightSnackbar';

import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';

import classes from './RegisterForm.module.css';

export default function RegisterForm(props) {
  const [openSnackbar, setIsOpenSnackbar] = useState();
  const [state, formAction] = useFormState(props.onUserRegister, undefined);

  const router = useRouter();

  useEffect(() => {
    if (state) {
      setIsOpenSnackbar(true);
    }

    setTimeout(() => {
      setIsOpenSnackbar(false);
    }, 5000);

    state?.success && router.push('/login');
  }, [state, router]);

  return (
    <form action={formAction} className={classes.form}>
      <input type='text' placeholder='Username' name='username' required />
      <input type='email' placeholder='Email' name='email' required />
      <input
        type='url'
        placeholder='Avatar Image URL (optional)'
        name='img-url'
      />
      <input type='password' placeholder='Password' name='password' required />
      <input
        type='password'
        placeholder='Confirm Password'
        name='confirm-password'
        required
      />

      <button type='submit'>Register</button>
      <BottomRightSnackbar onOpenSnackbar={openSnackbar} state={state} />
    </form>
  );
}
