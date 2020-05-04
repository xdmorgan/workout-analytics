import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import pages from "../pages";
import { Button } from "../components/button";
import styles from "./app-layout.module.scss";

const YEAR = new Date().getFullYear();

export function AppLayout({ children, title, nextRoute, previousRoute }) {
  const [menuVisible, setMenuVisible] = React.useState(false);
  return (
    <div className={cx(styles.layout, "d-flex")}>
      <header
        className={cx(styles.header, "bg-n0 c-n80 d-flex flx-a-c flx-j-sb")}
      >
        <Link className="d-block px-2x py-1x" to="/">
          Untitled 200
        </Link>
        <Button
          size="small"
          appearance="ghost-dark"
          onClick={() => setMenuVisible(!menuVisible)}
          className={styles["header__menu"]}
        >
          menu
        </Button>
      </header>
      <aside
        className={cx(styles.sidebar, "bg-n0 px-2x py-2x", {
          [styles["is-hidden-menu"]]: !menuVisible,
        })}
      >
        <ul>
          {Object.entries(pages).map(([name, meta]) => (
            <li key={meta.route}>
              <Link to={meta.route}>{meta.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className={cx(styles.main, "w-fill d-flex flx-d-c")}>
        <article className="flx-g-1 flx-s-0">
          <header className="container">
            <div
              className="d-flex flx-a-c flx-j-sb"
              style={{
                minHeight: "var(--layout-header-height)",
                borderBottom: "1px solid var(--color-n60)",
              }}
            >
              <h1 className="type-h3">{title}</h1>
              <nav>
                <Button
                  size="small"
                  appearance="ghost-light"
                  to={previousRoute || undefined}
                  disabled={!previousRoute}
                  className="mr-1x"
                >
                  &larr;
                </Button>
                <Button
                  size="small"
                  appearance="ghost-light"
                  to={nextRoute || undefined}
                  disabled={!nextRoute}
                  className="mr-1x"
                >
                  &rarr;
                </Button>
                <Button
                  size="small"
                  appearance="ghost-light"
                  onClick={console.log}
                >
                  &#x22ee;
                </Button>
              </nav>
            </div>
          </header>
          <div>{children}</div>
        </article>
        <footer className="flx-g-0 flx-s-0 c-n40">
          <div className="container">
            <div
              className="child-my-0 py-3x md:py-4x"
              style={{
                borderTop: "1px solid var(--color-n60)",
              }}
            >
              <p className="type-caption">
                This project is not affiliated with Peloton in any way. All
                rights reserved. {YEAR}
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
