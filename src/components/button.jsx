import React from "react";
import cx from "classnames";
import Link from "next/link";
import styles from "./button.module.scss";

export function Button({
  fill = false,
  as = undefined,
  href = undefined,
  to = undefined,
  className = undefined,
  appearance = undefined,
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
          [styles.fill]: !!fill,
          [styles[`button--${appearance}`]]: !!appearance,
        },
        className
      )}
    />
  );
}
