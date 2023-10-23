import {useContext} from 'react';
import { useTheme } from 'styled-components';
import NavLink from '../../styled.components/navlink';
import { TailwindTheme } from '../../themes/theme.types';
import styles from './navbar.module.scss'
import {useLocation} from 'react-router-dom';
import { getShadeColor } from '../../themes/theme.configuration';
import { ThemeNameContext } from '../../App';
const NavBar = ({ children }: { children?: React.ReactNode }) => {
  
  const path = useLocation().pathname
  const theme = useTheme()
  const themeName = useContext(ThemeNameContext).themeName

  return (
    <nav className={styles.nav} style={{backgroundColor: `${themeName.includes('dark')? getShadeColor(theme.background, '400')  : getShadeColor(theme.background, '100')}`}}>
      <div className={styles.logo}></div>
      <div className={styles.menu}>
            <NavLink href="/" isActive={"/"===path}>Home</NavLink>
            <NavLink href="/trasy" isActive={"/trasy"===path}>Trasy</NavLink>
        </div>
        <div className={styles.others}>
            <NavLink href="/themes" noBackground isActive={"/themes"===path}>Themes</NavLink>
      </div>

      <div className={styles.others}>
            <NavLink href="/login" noBackground isActive={"/login"===path}>Login</NavLink>
      </div>
    </nav>
  );
};
export default NavBar;
