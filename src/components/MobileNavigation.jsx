import classes from './Navigation.module.css'
import {CgMenuRound} from 'react-icons/cg';
import {CgCloseO} from 'react-icons/cg';
import { useState } from "react";

import {useAuthentication} from '../hooks/useAutentication';
import {useAuthValue} from '../context/AuthContext';

import styles from './MobileNavigation.module.css';
import { NavLink } from "react-router-dom";

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const hamburgerIcon = <CgMenuRound
                          className={classes.Hamburger}
                          size="40px"
                          color="#000"
                          onClick={() => setOpen(!open)}
                        />

  const closeIcon = <CgCloseO
                      className={classes.Hamburger}
                      size="40px"
                      color="#000"
                      onClick={() => setOpen(!open)}
                    />
                      
  return (
    <nav className={classes.MobileNavigation}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.brand}>
        <span>BLOG</span>
        </NavLink>
        {open ? closeIcon : hamburgerIcon }
        {open && (
          <>
            <ul className={styles.links_list}>
            <li>
              <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>
                Home
              </NavLink>
            </li>
            {!user && (
              <>
                <li>
                  <NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>
                    Entrar
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>
                    Cadastrar
                  </NavLink>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : "")}>
                    Novo post
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : "")}>
                    Dashboard
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
                Sobre
              </NavLink>
            </li>
            {user && (
              <li>
                <button onClick={logout}>Sair</button>
              </li>
            )}
          </ul>
          </>
        )}
      </div>
    </nav>
  
  )
}

export default MobileNavigation