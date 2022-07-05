import React from 'react';
import Navbar from './Navbar';
import { themeContext } from '../util/themeContext';

function Layout({ children }) {
  const darkMode = React.useContext(themeContext);
  return (
    <div>
      <Navbar />
      <main className={darkMode ? 'main dark' : ''}>
        <div className='container pt-4'>{children}</div>
      </main>
    </div>
  );
}

export default Layout;
