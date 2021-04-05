import { NavLink } from 'react-router-dom';
import s from '../styles/header.module.css';

const Navigation = () => (
  <header className={s.header}>
    <nav className={s.nav}>
      <NavLink to="/" className={s.link} activeClassName={s.activeLink} exact>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  </header>
);

export default Navigation;
