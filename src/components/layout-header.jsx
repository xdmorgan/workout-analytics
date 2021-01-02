import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { Button } from './button';
import styles from './layout-header.module.scss';

export function LayoutHeader() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <header className="bg-g10 c-n90">
      <div
        className={cx(styles.container, 'container d-flex flx-a-c flx-j-sb')}
      >
        <Link className="is-stealth" to="/">
          <p className="type-h4">Workout Analytics</p>
        </Link>
        <nav className="d-none lg:d-block">
          <ul className="list-reset d-flex">
            <li>
              <Button
                size="small"
                appearance="ghost"
                theme="dark"
                onClick={console.log}
              >
                Share
              </Button>
            </li>
            <li className="ml-1x xl:ml-2x">
              <Button
                size="small"
                appearance="ghost"
                theme="dark"
                href="//github.com/xdmorgan/workout-analytics"
              >
                GitHub
              </Button>
            </li>
            <li className="ml-1x xl:ml-2x">
              <Button size="small" appearance="ghost" theme="dark" to="/faq">
                FAQ
              </Button>
            </li>
          </ul>
        </nav>
        <div className="lg:d-none">
          <Button
            theme="dark"
            size="small"
            appearance="ghost"
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <span aria-label="Menu" role="img">
              🍔
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
