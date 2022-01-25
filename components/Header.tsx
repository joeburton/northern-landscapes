import React from 'react';
import Link from 'next/link';
import NavSeperator from './NavSeperator';

import styles from './Header.module.css';

const Header = () => (
  <header>
    <nav className={styles.mainNav}>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <NavSeperator />
      <Link href='/photos'>
        <a>Photography</a>
      </Link>
      <NavSeperator />
      <Link href='/about'>
        <a>About</a>
      </Link>
      <NavSeperator />
      <Link href='/api/photos'>
        <a>Image API</a>
      </Link>
    </nav>
    <hr />
  </header>
);

export default Header;
