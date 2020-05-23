import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import styles from "./link-list.module.scss";

export function LinkList({ className, ...props }) {
  return (
    <ul {...props} className={cx(styles.list, "list-reset my-0", className)} />
  );
}

function Item({ children, className, active, ...props }) {
  return (
    <li>
      <Link
        {...props}
        className={cx(
          styles.item,
          "type-small d-block py-05x px-1x rc-small is-stealth",
          {
            [styles["is-selected"]]: !!active,
          },
          className
        )}
      >
        {children}
      </Link>
    </li>
  );
}

LinkList.Item = Item;
