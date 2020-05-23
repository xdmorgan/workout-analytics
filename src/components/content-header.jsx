import React from "react";
import cx from "classnames";
import { Button } from "../components/button";

export function ContentHeader({
  previousRoute,
  nextRoute,
  children,
  className,
  ...props
}) {
  return (
    <header
      {...props}
      className={cx(
        "container d-flex flx-a-c flx-j-sb py-3x md:py-4x",
        className
      )}
    >
      <h1 className="type-h1 my-0">{children}</h1>
      {previousRoute === undefined && nextRoute === undefined ? null : (
        <nav className="d-none md:d-block">
          <Button.Group>
            <Button
              size="small"
              appearance="secondary"
              to={previousRoute || undefined}
              disabled={!previousRoute}
            >
              &larr;
            </Button>
            <Button
              size="small"
              appearance="secondary"
              to={nextRoute || undefined}
              disabled={!nextRoute}
              // className="mr-1x"
            >
              &rarr;
            </Button>
          </Button.Group>
        </nav>
      )}
    </header>
  );
}
