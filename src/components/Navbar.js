import React from 'react';
import { themeContext, setThemeContext } from '../util/themeContext';
import { FaToggleOn } from 'react-icons/fa';
import { MdOutlineMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    text: 'All Notes',
    link: '/'
  },
  {
    text: 'Register',
    link: 'register/'
  },
  {
    text: 'Login',
    link: 'login/'
  },
  {
    text: 'Logout',
    link: 'logout/'
  }
];

function Navbar() {
  const darkMode = React.useContext(themeContext);
  const click = React.useContext(setThemeContext);

  return (
    <nav className={darkMode ? 'navbar p-3 dark' : 'navbar p-3 light'}>
      <button
        className={darkMode ? 'btn btn-outline-light' : 'btn btn-outline-dark'}
        type='button'
        data-bs-toggle='offcanvas'
        data-bs-target='#offcanvasExample'
        aria-controls='offcanvasExample'
      >
        {/*<span className="navbar-toggler-icon"></span>*/}
        <MdOutlineMenu className='menu-icon' />
      </button>

      <div
        className={
          darkMode
            ? 'offcanvas offcanvas-start bg-dark text-light'
            : 'offcanvas offcanvas-start'
        }
        tabIndex='-1'
        id='offcanvasExample'
        aria-labelledby='offcanvasExampleLabel'
      >
        <div className='offcanvas-header'>
          <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
            MyNotes
          </h5>
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
        </div>
        <div className='offcanvas-body'>
          <ul className='navbar-nav'>
            {menuItems.map((menu) => {
              return (
                <li className='nav-item' key={menu.text}>
                  <Link className='nav-link' to={menu.link}>
                    {menu.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='toggler justify-content-center'>
        <p className='toggler-dark'>Dark</p>
        <span onClick={click}>
          <FaToggleOn className={darkMode ? 'dark-icon' : 'light-icon'} />
        </span>
        <p className='toggler-light'>Light</p>
      </div>
    </nav>
  );
}

export default Navbar;
