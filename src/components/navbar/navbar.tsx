import NavLink from '../navlink/navlink';
import styles from './navbar.module.scss'
const NavBar = ({ children }: { children?: React.ReactNode }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}></div>
      <div className={styles.menu}>
            <NavLink isActive={true}>Home</NavLink>
            <NavLink>Trasy</NavLink>
        </div>
      <div className={styles.others}>
            <NavLink noBackground>Login</NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
