import Header from './Header';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider.jsx';

export default function Page() {
  const { pageTheme } = useContext(ThemeContext);

  return (
    <div id="app" className={pageTheme}>
      <Header />

      <article>
        <h2>React Course</h2>
        <p>
          A course that teaches you React from the ground up and in great depth!
        </p>
      </article>
    </div>
  );
}
