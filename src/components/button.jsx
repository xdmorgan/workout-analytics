import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

export function Button({
  as = undefined,
  href = undefined,
  to = undefined,
  className = undefined,
  appearance = "primary",
  size = undefined,
  theme = "light",
  ...props
}) {
  const Element = as || (href || to ? Link : "button");
  return (
    <Element
      {...props}
      to={to}
      href={href}
      {...(Element === "button" ? { type: "button" } : {})}
      className={cx(
        styles.button,
        {
          [styles[`button--${theme}`]]: theme,
          [styles[`button--${theme}--${appearance}`]]: theme && appearance,
          [styles[`button--${size}`]]: !!size,
        },
        className
      )}
    />
  );
}
