import { revalidatePath } from 'next/cache';
import bcrypt from 'bcryptjs';

import { signIn, signOut } from '@/lib/auth';
import { handleDBConnection } from './db/conn';
import { User } from './models/users';
import { Post } from './models/posts';

// Admin add user
export async function handleAddUser(previousState, formData) {
  'use server';

  const inputData = Object.fromEntries(formData);

  handleDBConnection();

  const existingUser = await User.findOne({
    username: inputData.username.toLowerCase().trim(),
  });
  const existingEmail = await User.findOne({ email: inputData.email });

  if (existingUser) {
    return { error: 'Username is already taken' };
  }

  if (existingEmail) {
    return { error: 'Email is already in use' };
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(inputData.password, salt);

  const newUser = new User({
    username: inputData.username.toLowerCase().trim(),
    email: inputData.email,
    password: hashedPassword,
    image: inputData['img-url'],
    isAdmin: inputData.role === 'admin' ? true : false,
  });

  await newUser.save();
  revalidatePath('/admin');

  return { success: true, message: 'User added successfully!' };
}

// Admin delete user
export async function handleDeleteUser(formData) {
  'use server';
  const { uname, uid } = Object.fromEntries(formData);

  handleDBConnection();

  await Post.deleteMany({ username: uname });
  await User.findByIdAndDelete(uid)
    .then(() => {
      revalidatePath('/blog');
      revalidatePath('/admin');

      return { success: true, message: 'User removed successfully!' };
    })
    .catch((_) => {
      return { message: 'Failed to remove user' };
    });
}

// Add Post
export async function handleAddPost(previousState, formData) {
  'use server';

  const inputData = Object.fromEntries(formData);

  handleDBConnection();

  const newPost = await Post({
    title: inputData.title,
    description: inputData.description,
    image: inputData['img-url'],
    username: inputData.username.toLowerCase().trim(),
  });

  await newPost.save();
  revalidatePath('/admin');
}

// Delete Post
export async function handleDeletePost(formData) {
  'use server';

  const { pid } = Object.fromEntries(formData);

  handleDBConnection();

  await Post.findByIdAndDelete(pid)
    .then(() => {
      revalidatePath('/admin');
      revalidatePath('/blog');

      return { success: true, message: 'Post removed successfully!' };
    })
    .catch((_) => {
      return { message: 'Failed to remove post' };
    });
}

// GitHub login
export async function handleGitHubLogin() {
  'use server';
  await signIn('github');
}

// // GitHub logout
export async function handleGitHubLogout() {
  'use server';
  await signOut();
}

// User register
export async function handleUserRegister(previousState, formData) {
  'use server';

  const inputData = Object.fromEntries(formData);

  if (inputData.password !== inputData['confirm-password']) {
    return { error: 'Passwords do not match' };
  }

  handleDBConnection();

  const existingUser = await User.findOne({
    username: inputData.username.toLowerCase().trim(),
  });
  const existingEmail = await User.findOne({ email: inputData.email });

  if (existingUser) {
    return { error: 'Username is already taken' };
  }

  if (existingEmail) {
    return { error: 'Email is already in use' };
  }

  // hashing password using bcryptjs npm library
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(inputData.password, salt);

  const newUser = new User({
    username: inputData.username.toLowerCase().trim(),
    email: inputData.email,
    password: hashedPassword,
    image: inputData['img-url'],
  });

  await newUser.save();

  return { success: true, message: 'User registered successfully!' };
}
// User login
export async function handleUserLogin(previousState, formData) {
  'use server';

  const inputData = Object.fromEntries(formData);

  const username = inputData.username.toLowerCase().trim();
  const password = inputData.password;

  try {
    await signIn('credentials', { username, password });
    return { success: true, message: 'Logged in successfully!' };
  } catch (error) {
    if (error.message.includes('CredentialsSignin')) {
      return { error: 'Invalid username or password' };
    }

    throw error;
  }
}
