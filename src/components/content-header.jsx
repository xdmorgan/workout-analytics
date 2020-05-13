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
      style={{
        borderBottom: "1px solid var(--color-n50)",
      }}
      {...props}
      className={cx("d-flex flx-a-c flx-j-sb pb-3x md:pb-4x", className)}
    >
      <h1 className="type-h1 my-0">{children}</h1>
      <nav className="d-none md:d-block">
        <Button.Group>
          <Button
            size="small"
            appearance="ghost"
            to={previousRoute || undefined}
            disabled={!previousRoute}
          >
            &larr;
          </Button>
          <Button
            size="small"
            appearance="ghost"
            to={nextRoute || undefined}
            disabled={!nextRoute}
            // className="mr-1x"
          >
            &rarr;
          </Button>
          {/* <Button
          size="small"
          appearance="ghost"
          onClick={console.log}
        >
          &#x22ee;
        </Button> */}
        </Button.Group>
      </nav>
    </header>
  );
}
