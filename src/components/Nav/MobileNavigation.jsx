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
              <NavLink to="/" onClick={() => setOpen(!open)}><li>Home</li></NavLink>
              {!user && (
                <> 
                  <NavLink to="/login" onClick={() => setOpen(!open)}><li>Entrar</li></NavLink>
                  <NavLink to="/register" onClick={() => setOpen(!open)}><li>Cadastrar</li></NavLink>
                </>
              )}
              {user && (
                <>
                  <NavLink to="/posts/create" onClick={() => setOpen(!open)}><li>Novo post</li></NavLink>
                  <NavLink to="/dashboard" onClick={() => setOpen(!open)}><li>Dashboard</li></NavLink>
                </>
              )}
              <NavLink to="/about" onClick={() => setOpen(!open)}><li>Sobre</li></NavLink>
              {user && (
                <NavLink onClick={logout}><li>Sair</li></NavLink>
              )}
            </ul>
          </>
        )}
      </nav>
    </header>
  )
}

export default MobileNavigation