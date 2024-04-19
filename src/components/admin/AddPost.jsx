'use client';

import { useFormState } from 'react-dom';
import { useRef, useEffect, useState } from 'react';

import BottomRightSnackbar from '@/utils/BottomRightSnackbar';
import classes from './Add.module.css';

export default function AddPost(props) {
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
  }, [state]);

  if (state?.success) {
    formRef.current.reset();
  }

  return (
    <form action={formAction} className={classes.form} ref={formRef}>
      <h2>Add New Post</h2>
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
      <button>Add Post</button>
      <BottomRightSnackbar onOpenSnackbar={openSnackbar} state={state} />
    </form>
  );
}
