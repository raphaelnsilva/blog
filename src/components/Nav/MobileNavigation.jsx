import {AiOutlineMenu} from 'react-icons/ai';
import {IoMdClose} from 'react-icons/io';


import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {useAuthentication} from '../../hooks/useAutentication';
import {useAuthValue} from '../../context/AuthContext';

import classes from './Navigation.module.css';

const MobileNavigation = () => {

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const [open, setOpen] = useState(false);

  const openIcon = <AiOutlineMenu 
    className={classes.menuIcon}
    size='25px' 
    onClick={() => setOpen(!open)}
  />

  const closeIcon = <IoMdClose
    className={classes.closeIcon}
    size='25px'
    onClick={() => setOpen(!open)}
  />

  

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.brand}><span>BLOG</span></NavLink>
      <nav className={classes.MobileNavigation}>
        {open ? closeIcon : openIcon}
        {open && (
          <>
            <ul className={classes.menu}>
              <li> 
                <NavLink to="/" onClick={() => setOpen(!open)}>Home</NavLink>
              </li>
              {!user && (
                <>
                  <li>
                    <NavLink to="/login" onClick={() => setOpen(!open)}>Entrar</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" onClick={() => setOpen(!open)}>Cadastrar</NavLink>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li>
                    <NavLink to="/posts/create" onClick={() => setOpen(!open)}>Novo post</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard" onClick={() => setOpen(!open)}>Dashboard</NavLink>
                  </li>
                </>
              )}
              <li>
                <NavLink to="/about" onClick={() => setOpen(!open)}>Sobre</NavLink>
              </li>
              {user && (
                <li>
                  <button onClick={logout}>Sair</button>
                </li>
              )}
            </ul>
          </>
        )}
      </nav>
    </header>
  )
}

export default MobileNavigation