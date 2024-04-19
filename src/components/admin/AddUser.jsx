'use client';

import { useFormState } from 'react-dom';
import { useRef, useState, useEffect } from 'react';

import BottomRightSnackbar from '@/utils/BottomRightSnackbar';
import classes from './Add.module.css';

export default function AddUser(props) {
  const [openSnackbar, setIsOpenSnackbar] = useState();
  const [state, formAction] = useFormState(props.onAddUser, undefined);

  const formRef = useRef();

  useEffect(() => {
    if (state) {
      setIsOpenSnackbar(true);
    }

    setTimeout(() => {
      setIsOpenSnackbar(false);
    }, 5000);
  }, [state]);

  if (state?.success) formRef.current.reset();

  return (
    <form action={formAction} className={classes.form} ref={formRef}>
      <h2>Add New User</h2>
      <span>{state?.error}</span>
      <input type='text' name='username' placeholder='Username' required />
      <input type='email' name='email' placeholder='Email' required />
      <input type='url' name='img-url' placeholder='Image URL (Optional)' />
      <label className={classes.radioButtonContainer}>
        Admin
        <input type='radio' id='admin' name='role' value='admin' required />
        <span className={classes.checkmark}></span>
      </label>
      <label className={classes.radioButtonContainer}>
        User
        <input type='radio' id='user' name='role' value='user' required />
        <span className={classes.checkmark}></span>
      </label>
      <input type='password' name='password' placeholder='Password' required />
      <button>Add User</button>
      <BottomRightSnackbar onOpenSnackbar={openSnackbar} state={state} />
    </form>
  );
}