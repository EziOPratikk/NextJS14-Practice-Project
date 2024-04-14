'use client';

import { Fragment } from 'react';
import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import classes from './NavigationRoutes.module.css';
// import hamburgerMenu from '../../../public/images/hamburger-menu-icon.png';

const routes = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

export default function NavigationRoutes() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const pathName = usePathname();

  const isLoggedIn = false;
  const isAdmin = false;

  function handleOpenSidebar() {
    setIsOpenSidebar((prevValue) => !prevValue);
  }

  function handleRenderLinks() {
    return routes.map((route) => (
      <Link
        href={route.path}
        key={route.title}
        className={`${classes.links} ${
          pathName === route.path && classes.active
        }`}
      >
        {route.title}
      </Link>
    ));
  }

  function handleCheckAuth() {
    return isLoggedIn ? (
      <Fragment>
        {isAdmin && (
          <Link
            href='/admin'
            className={`${classes.links} ${
              pathName === '/admin' && classes.active
            }`}
          >
            Admin
          </Link>
        )}
        <button className={classes.links}>Logout</button>
      </Fragment>
    ) : (
      <Link
        href='/login'
        className={`${classes.links} ${
          pathName === '/login' && classes.active
        }`}
      >
        Login
      </Link>
    );
  }

  return (
    <Fragment>
      <div className={classes.linksContainer}>
        {handleRenderLinks()}
        {handleCheckAuth()}
      </div>

      <Image
        src='/images/hamburger-menu-icon.png'
        width={40}
        height={40}
        quality={100}
        alt='a menu'
        className={classes.hamburgerMenu}
        onClick={handleOpenSidebar}
      />

      {isOpenSidebar && (
        <div className={classes.sidebarContainer}>
          {handleRenderLinks()}
          {handleCheckAuth()}
        </div>
      )}
    </Fragment>
  );
}
