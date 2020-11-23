import React from "react";
import cx from "classnames";
import styles from "./app-layout.module.scss";

export function AppLayout({ children, sidebar }) {
  return (
    <div className={cx(styles.layout)}>
      <div className={cx(styles.layout__navigation)}>{sidebar}</div>
      <main className={cx(styles.layout__content)}>{children}</main>
    </div>
  );
}
