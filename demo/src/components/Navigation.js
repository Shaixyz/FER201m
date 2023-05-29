import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  const textColor = dark ? 'white' : 'black'; // Determine the text color based on the theme

  return (
    <div>
      <nav className='header' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <ul>
          <li><a className='active' href='#home' style={{ color: textColor }}>Home</a></li>
          <li><a href='#news' style={{ color: textColor }}>News</a></li>
          <li><a href='#about' style={{ color: textColor }}>About</a></li>
          <li><a href='#contact' style={{ color: textColor }}>Contact</a></li>
        </ul>
        <div className='switch' style={{ position: 'relative' }}>
          <a
            className='switch-mode'
            href='#'
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: 'none'
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </a>
        </div>
      </nav>
    </div>
  );
}
