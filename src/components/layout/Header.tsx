import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ka' : 'en');
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
      <div className="header__actions">
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <button onClick={toggleLanguage}>
          {i18n.language === 'en' ? 'ქართული' : 'English'}
        </button>
      </div>
    </header>
  );
}