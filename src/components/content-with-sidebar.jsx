import React from "react";
import cx from "classnames";

import styles from "./content-with-sidebar.module.scss";

export function ContentWithSidebar({ sidebar, children }) {
  return (
    <div className={cx(styles.content, "container py-6x md:py-8x")}>
      <aside className="d-none lg:d-block mdpb-3x md:pb-4x">{sidebar}</aside>
      <article>{children}</article>
    </div>
  );
}
