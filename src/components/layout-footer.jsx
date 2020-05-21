import React from "react";
import cx from "classnames";
import styles from "./layout-footer.module.scss";

const YEAR = new Date().getFullYear();

export function LayoutFooter() {
  return (
    <footer className="bg-n0 c-n90 py-8x md:py-10x lg:py-12x">
      <div className={cx(styles.footer, "container")}>
        <div className={cx(styles.footer__name, "child-my-0")}>
          <h2 className="type-h3">Workout Analytics</h2>
        </div>
        <div className={cx(styles.footer__links, "child-my-0")}>
          <nav>
            <ul className="list-reset m-0 type-small">
              <li className="mb-05x">
                <a
                  className="is-stealth"
                  href="//github.com/xdmorgan/peloton-workouts/issues/new"
                >
                  Found a bug?
                </a>
              </li>
              <li className="mb-05x">
                <a
                  className="is-stealth"
                  href="//github.com/xdmorgan/peloton-workouts/tree/master/docs/CONTRIBUTING.md"
                >
                  Contributing
                </a>
              </li>
              <li className="mb-05x">
                <a className="is-stealth" href="//twitter.com/xdanmorgan">
                  Share feedback
                </a>
              </li>
              <li className="mb-05x">
                <a
                  className="is-stealth"
                  href="//danny.codes/blog/workout-analytics"
                >
                  Case study
                </a>
              </li>
              <li className="mb-05x">
                <a className="is-stealth" href="/styleguide">
                  UI styleguide
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={cx(styles.footer__privacy, "child-my-0")}>
          <p className="type-ui mb-2x c-n50" style={{ maxWidth: 480 }}>
            This site does not store or retain workout data nor does your data
            ever leave your browser,{" "}
            <span className="c-n90">
              <a className="is-stealth" href="/faq">
                see here for more information
              </a>
            </span>
            .
          </p>
          <p className="type-caption mb-1x c-n40" style={{ maxWidth: 480 }}>
            This site is not affiliated with Peloton in any way.
          </p>
          <p className="type-caption m-0 c-n40" style={{ maxWidth: 480 }}>
            All rights reserved. {YEAR}
          </p>
        </div>
      </div>
    </footer>
  );
}
