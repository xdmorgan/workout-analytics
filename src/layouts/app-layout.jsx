import React from "react";
import cx from "classnames";
import styles from "./app-layout.module.scss";

export function AppLayout({ children, sidebar }) {
  return (
    <div className={cx(styles.layout)}>
      <aside className={cx(styles.layout__navigation)}>{sidebar}</aside>
      <main className={cx(styles.layout__content)}>{children}</main>
    </div>
  );
}
