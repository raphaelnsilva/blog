import {GiHamburgerMenu} from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import {useAuthentication} from '../../hooks/useAutentication';
import {useAuthValue} from '../../context/AuthContext';

import styles from './MobileNavigation.module.css'

import { useState } from 'react';

const MobileNavigation = () => {

  const [active, setActive] =useState(false);

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  return (
    <nav>
      <GiHamburgerMenu onClick={() => StereoPannerNode(!open)}/>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>

        {/* Se NÃO estiver logado */}
        {!user && (
          <>
            <li>
              <NavLink to="/login">
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                Cadastrar
              </NavLink>
            </li>
          </>
        )}

        {/* Se ESTIVER logado */}
        {user && (
          <>
            <li>
              <NavLink to="/posts/create">
                Novo post
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/about">
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
  )
}

export default MobileNavigation