import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import pages from "../pages";
import { Button } from "../components/button";
import styles from "./app-layout.module.scss";
import { LayoutFooter } from "../components/layout-footer";
import { LayoutHeader } from "../components/layout-header";

export function AppLayout({ children, title, nextRoute, previousRoute }) {
  return (
    <div className={cx(styles.layout)}>
      <div className={styles.layout__header}>
        <LayoutHeader />
      </div>
      <main className={cx(styles.layout__main)}>
        <div className={cx(styles.content, "container py-6x md:py-8x")}>
          <aside className={cx(styles.content__sidebar, "pb-3x md:pb-4x")}>
            <div className={styles.content__sidebar__sticky}>
              <ul className="list-reset my-0">
                {Object.entries(pages).map(([name, meta]) => (
                  <li key={meta.route}>
                    <Link className="is-stealth" to={meta.route}>
                      {meta.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          <article className={styles.content__main}>
            <header
              className="d-flex flx-a-c flx-j-sb pb-3x md:pb-4x"
              style={{
                borderBottom: "1px solid var(--color-n50)",
              }}
            >
              <h1 className="type-h1 my-0">{title}</h1>
              <nav className="d-none md:d-block">
                <Button
                  size="small"
                  appearance="ghost"
                  to={previousRoute || undefined}
                  disabled={!previousRoute}
                  className="mr-1x"
                >
                  &larr;
                </Button>
                <Button
                  size="small"
                  appearance="ghost"
                  to={nextRoute || undefined}
                  disabled={!nextRoute}
                  className="mr-1x"
                >
                  &rarr;
                </Button>
                <Button size="small" appearance="ghost" onClick={console.log}>
                  &#x22ee;
                </Button>
              </nav>
            </header>
            <div>{children}</div>
          </article>
        </div>
      </main>
      <div className={styles.layout__footer}>
        <LayoutFooter />
      </div>
    </div>
  );
}
