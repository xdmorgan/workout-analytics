import React from "react";
import cx from "classnames";
import { useLocation, Link } from "react-router-dom";
import pages from "../pages";
// import { LayoutFooter } from "../components/layout-footer";
// import { LayoutHeader } from "../components/layout-header";
// import { ContentHeader } from "../components/content-header";
import { Button } from "../components/button";
import { LinkList } from "../components/link-list";
import styles from "./app-layout.module.scss";
import { HorizontalRule } from "../components/horizontal-rule";

export function AppLayout({ children, title, nextRoute, previousRoute }) {
  return (
    <div className={cx(styles.layout)}>
      <aside className={cx(styles.layout__navigation)}>
        <Sidebar />
      </aside>
      <main className={cx(styles.layout__content)}>{children}</main>
    </div>
  );
}

function Content({ divider, ...props }) {
  const content = (
    <div className="container my-6x md:my-8x xl:my-12x">
      <div {...props}></div>
    </div>
  );
  if (!divider) return content;
  return (
    <>
      {divider === "before" && (
        <HorizontalRule className="c-n50 mb-6x md:mb-8x xl:mb-12x" />
      )}
      {content}
      {divider === "after" && (
        <HorizontalRule className="c-n50 mt-6x md:mt-8x xl:mt-12x" />
      )}
    </>
  );
}

function Pagination({ previousRoute, previousLabel, nextRoute, nextLabel }) {
  return (
    <nav className="container py-4x md:py-6x d-flex flx-a-c flx-j-sb">
      <Button to={previousRoute} appearance="ghost" disabled={!previousRoute}>
        <>Previous</>
        {previousLabel && (
          <span className="d-none lg:d-inline">: {previousLabel}</span>
        )}
      </Button>
      <Button to={nextRoute} appearance="secondary" disabled={!nextRoute}>
        <>Next</>
        {nextLabel && <span className="d-none lg:d-inline">: {nextLabel}</span>}
      </Button>
    </nav>
  );
}

function Sidebar() {
  const location = useLocation();
  return (
    <div className="d-flex flx-d-c h-fill" style={{ overflow: "scroll" }}>
      <header>
        <div className="child-my-0 px-3x py-4x">
          <Link to="/" className="type-h3 d-block is-stealth">
            <span className="d-block">Workout </span>
            <span className="d-block">Analytics</span>
          </Link>
        </div>
      </header>
      <div className="px-2x pb-3x flx-g-1">
        <LinkList>
          {Object.values(pages)
            .filter(({ sidebar }) => !!sidebar)
            .map((meta) => (
              <LinkList.Item
                key={meta.route}
                to={meta.route}
                active={location.pathname === meta.route}
              >
                {meta.sidebar}
              </LinkList.Item>
            ))}
        </LinkList>
      </div>
      <div className="child-my-0 px-3x pb-3x">
        <ul className="list-reset type-ui">
          <li className="mb-05x">
            <Link className="is-stealth" to="/how-to">
              How-to export data
            </Link>
          </li>
          <li className="mb-05x">
            <a
              className="is-stealth"
              href="//github.com/xdmorgan/peloton-workouts/issues/new"
            >
              Report a bug
            </a>
          </li>
          <li className="mb-05x">
            <a
              className="is-stealth"
              href="//github.com/xdmorgan/peloton-workouts/tree/master/docs/CONTRIBUTING.md"
            >
              Contribution Guidelines
            </a>
          </li>
          <li className="mb-05x">
            <a className="is-stealth" href="//twitter.com/xdanmorgan">
              Leave feedback
            </a>
          </li>
          {/* <li className="mb-05x">
            <a
              className="is-stealth"
              href="//danny.codes/blog/workout-analytics"
            >
              Read case study
            </a>
          </li> */}
          <li className="mb-05x">
            <a className="is-stealth" href="/styleguide">
              View styleguide
            </a>
          </li>
        </ul>
      </div>
      <footer className="child-my-0 c-n40 px-3x pb-3x">
        <p className="type-caption mb-1x">
          This site has no affiliation with Peloton Interactive in any way.
        </p>
        <p className="type-caption mt-0">All rights reserved, 2020.</p>
      </footer>
    </div>
  );
}

AppLayout.Content = Content;
AppLayout.Pagination = Pagination;
