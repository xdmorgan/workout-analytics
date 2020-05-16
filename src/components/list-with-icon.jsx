import React from "react";
import cx from "classnames";

export function ListWithIcon({ className, children, ...props }) {
  return (
    <ul {...props} className={cx("list-reset", className)}>
      {children}
    </ul>
  );
}

function Item({ icon, className, children, ...props }) {
  return (
    <li {...props} className={cx("d-flex mb-2x", className)}>
      <div className="mx-1x flx-g-0 flx-s-0 c-g40">{icon}</div>
      <div>{children}</div>
    </li>
  );
}

ListWithIcon.Item = Item;
