import { NavLink } from 'react-router-dom'

import {useAuthentication} from '../hooks/useAutentication';
import {useAuthValue} from '../context/AuthContext';

import styles from './Navigation.module.css';
import classes from "./Navigation.module.css";

const Navigation = () => {

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
      <div className={classes.Navigation}>
        <nav className={styles.navbar}>
          <NavLink to="/" className={styles.brand}>
            <span>BLOG</span>
          </NavLink>
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
        </nav>
      </div>
  )
}

export default Navigation;