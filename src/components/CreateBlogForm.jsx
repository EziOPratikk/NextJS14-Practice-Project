'use client';

import { useState, useEffect, useRef } from 'react';
import { useFormState } from 'react-dom';

import BottomRightSnackbar from '@/utils/BottomRightSnackbar';
import classes from './CreateBlogForm.module.css';

export default function CreateBlogForm(props) {
  const [openSnackbar, setIsOpenSnackbar] = useState();
  const [state, formAction] = useFormState(props.onAddPost, undefined);

  const formRef = useRef();

  useEffect(() => {
    if (state) {
      setIsOpenSnackbar(true);
    }
    setTimeout(() => {
      setIsOpenSnackbar(false);
    }, 5000);

    if (state?.success) formRef.current.reset();
  }, [state]);

  return (
    <form action={formAction} ref={formRef} className={classes.form}>
      <input type='text' name='username' placeholder='Username' required />
      <input type='text' name='title' placeholder='Title' required />
      <input type='url' name='img-url' placeholder='Image URL (Optional)' />
      <textarea
        cols='30'
        rows='10'
        name='description'
        placeholder='Description'
        required
      ></textarea>
      <div className={classes.actions}>
        <button type='submit'>Create</button>
      </div>
      <BottomRightSnackbar onOpenSnackbar={openSnackbar} state={state} />
    </form>
  );
}
