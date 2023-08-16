import { NavLink } from 'react-router-dom';

import {useAuthentication} from '../hooks/useAutentication';
import {useAuthValue} from '../context/AuthContext';

import styles from './Navbar.module.css';

const Navbar = () => {

  const {user} = useAuthValue();

  return (
    <>
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
          <li>
            <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>
              Sobre
            </NavLink>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar