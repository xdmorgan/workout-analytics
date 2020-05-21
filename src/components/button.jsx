import React from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import styles from "./button.module.scss";

export function Button({
  as = "button",
  href = undefined,
  to = undefined,
  className = undefined,
  appearance = "primary",
  size = undefined,
  theme = "light",
  ...props
}) {
  let Element = as;
  if (to) Element = Link;
  if (href) Element = "a";
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
          [styles[`button--${size}`]]: !!size,
          "is-active": !!props["aria-pressed"],
        },
        className
      )}
    />
  );
}

function Group({ as: Element = "div", className, ...props }) {
  return (
    <Element role="group" {...props} className={cx(styles.group, className)} />
  );
}

Button.Group = Group;
