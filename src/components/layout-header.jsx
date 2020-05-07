import React from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { Button } from "./button";
import styles from "./layout-header.module.scss";

export function LayoutHeader() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <header className="bg-g90 c-g10">
      <div
        className={cx(styles.container, "container d-flex flx-a-c flx-j-sb")}
      >
        <Link className="is-stealth" to="/">
          <p className="type-h4">Peloton Analytics</p>
        </Link>
        <Button
          theme="dark"
          size="small"
          appearance="ghost"
          onClick={() => setMenuVisible(!menuVisible)}
          className={styles.header__menu}
        >
          <span aria-label="Menu" role="img">
            🍔
          </span>
        </Button>
      </div>
    </header>
  );
}
