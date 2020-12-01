import React, { useCallback, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import cx from 'classnames';
import pages from '../pages';
import { LinkList } from './link-list';
import { useProtectedPage } from '../hooks/use-protected-page';
import { Button } from './button';
import styles from './global-navigation.module.scss';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { nope } = useProtectedPage();
  const onToggleMenu = useCallback(() => setIsMenuOpen(s => !s), [
    setIsMenuOpen,
  ]);
  const onCloseMenu = useCallback(() => setIsMenuOpen(s => !s), [
    setIsMenuOpen,
  ]);
  return (
    <div id="nav" className={styles.nav}>
      <header className={cx(styles.nav__header, 'child-my-0')}>
        <Link to="/" className="type-h3 d-block is-stealth">
          <span className="lg:d-block">Workout </span>
          <span className="lg:d-block">Analytics</span>
        </Link>
        <Button
          className={cx(styles.nav__button)}
          size="small"
          appearance="ghost"
          onClick={onToggleMenu}
          aria-label="Navigation menu"
          aria-haspopup="true"
          aria-selected={isMenuOpen}
          aria-controls="nav-content"
        >
          {isMenuOpen ? (
            <span role="img">&times;</span>
          ) : (
            <span role="img">&#8942;</span>
          )}
        </Button>
      </header>
      <div
        id="nav-content"
        aria-expanded={isMenuOpen}
        className={cx(styles.nav__content)}
      >
        <div className="px-2x pb-3x flx-g-1">
          <LinkList>
            {Object.values(pages)
              .filter(meta => !!meta.sidebar)
              .filter(meta => !(nope && meta.protected))
              .map(meta => (
                <LinkList.Item
                  key={meta.route}
                  to={meta.route}
                  active={location.pathname === meta.route}
                  onClick={onCloseMenu}
                >
                  {meta.sidebar}
                </LinkList.Item>
              ))}
          </LinkList>
        </div>
        <div className="child-my-0 px-3x pb-3x">
          <ul className="list-reset type-ui">
            <li className="mb-05x">
              <Link className="is-stealth" to="/how-to" onClick={onCloseMenu}>
                How-to export data
              </Link>
            </li>
            <li className="mb-05x">
              <a
                className="is-stealth"
                href="//github.com/xdmorgan/workout-analytics/issues/new"
              >
                Report a bug
              </a>
            </li>
            <li className="mb-05x">
              <a
                className="is-stealth"
                href="//github.com/xdmorgan/workout-analytics/tree/main/docs/CONTRIBUTING.md"
              >
                Contribution Guidelines
              </a>
            </li>
            <li className="mb-05x">
              <a className="is-stealth" href="//twitter.com/xdanmorgan">
                Leave feedback
              </a>
            </li>
            {/* <li className="mb-05x">
            <a
              className="is-stealth"
              href="//danny.codes/blog/workout-analytics"
            >
              Read case study
            </a>
          </li> */}
            <li className="mb-05x">
              <a className="is-stealth" href="/styleguide">
                View styleguide
              </a>
            </li>
          </ul>
        </div>
        <footer className="child-my-0 c-n40 px-3x pb-3x">
          <p className="type-caption mb-1x">
            This site has no affiliation with Peloton Interactive in any way.
          </p>
          <p className="type-caption mt-0">All rights reserved, 2020.</p>
        </footer>
      </div>
    </div>
  );
}
