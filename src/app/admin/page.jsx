import PostList from '@/components/admin/PostList';
import AddPost from '@/components/admin/AddPost';
import UserList from '@/components/admin/UserList';
import AddUser from '@/components/admin/AddUser';
import { handleAddUser } from '@/lib/action';
import { handleAddPost } from '@/lib/action';

import classes from './page.module.css';

export default async function Admin() {
  return (
    <main className={classes.mainContainer}>
      <div className={classes.gridCardContainer}>
        <PostList />
        <AddPost onAddPost={handleAddPost} />
      </div>
      <div className={classes.gridCardContainer}>
        <UserList />
        <AddUser onAddUser={handleAddUser} />
      </div>
    </main>
  );
}