import { useEffect, useState } from 'react';
import { ReactComponent as Moon } from '../../assets/icon-moon.svg';
import { ReactComponent as Sun } from '../../assets/icon-sun.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const themeText = isDark ? 'Light' : 'Dark';
  const ThemeIcon = isDark ? Sun : Moon;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
