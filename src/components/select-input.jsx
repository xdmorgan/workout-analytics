import React from "react";
import cx from "classnames";
import styles from "./select-input.module.scss";

export function SelectInput({
  className = undefined,
  size = undefined,
  ...props
}) {
  return (
    <select
      {...props}
      className={cx(
        styles.select,
        { [styles[`select--${size}`]]: !!size },
        className
      )}
    />
  );
}
