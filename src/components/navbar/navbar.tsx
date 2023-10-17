import NavLink from '../../styled.components/navlink';
import styles from './navbar.module.scss'
import {useLocation} from 'react-router-dom';
const NavBar = ({ children }: { children?: React.ReactNode }) => {
  
  const path = useLocation().pathname
  
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}></div>
      <div className={styles.menu}>
            <NavLink href="/" isActive={"/"===path}>Home</NavLink>
            <NavLink href="/trasy" isActive={"/trasy"===path}>Trasy</NavLink>
        </div>
      <div className={styles.others}>
            <NavLink href="/login" noBackground isActive={"/login"===path}>Login</NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
