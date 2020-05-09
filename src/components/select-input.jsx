import React from "react";
import cx from "classnames";
import styles from "./select-input.module.scss";

export function SelectInput({ className, ...props }) {
  return <select {...props} className={cx(styles.select, className)} />;
}
