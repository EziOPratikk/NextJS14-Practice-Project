import Image from 'next/image';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { handleGetUsers } from '@/lib/data';
import { handleDeleteUser } from '@/lib/action';
import classes from './List.module.css';

export default async function UserList() {
  const users = await handleGetUsers();

  return (
    <ul className={classes.postsContainer}>
      <h2>Users</h2>

      {users.map(
        (user) =>
          !user.isAdmin && (
            <li className={classes.infoContainer} key={user._id}>
              <div className={classes.leftContainer}>
                <Image
                  src={user.image ? user.image : '/images/user.png'}
                  alt={'a ' + user.title + ' image'}
                  width={40}
                  height={40}
                  className={classes.img}
                />
                <p>{user.username.toUpperCase()}</p>
              </div>
              <div className={classes.rightContainer}>
                <form action={handleDeleteUser}>
                  <input
                    type='hidden'
                    name='uname'
                    value={user.username.toString()}
                  />
                  <input type='hidden' name='uid' value={user._id.toString()} />
                  <button>
                    <DeleteForeverIcon
                      className={classes.deleteIcon}
                      fontSize='large'
                    />
                  </button>
                </form>
              </div>
            </li>
          )
      )}
    </ul>
  );
}
