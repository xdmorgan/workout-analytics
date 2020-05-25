import React from "react";
import { useLocation, Link } from "react-router-dom";
import pages from "../pages";
import { LinkList } from "../components/link-list";

export function Sidebar() {
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
              href="//github.com/xdmorgan/workout-analytics/issues/new"
            >
              Report a bug
            </a>
          </li>
          <li className="mb-05x">
            <a
              className="is-stealth"
              href="//github.com/xdmorgan/workout-analytics/tree/master/docs/CONTRIBUTING.md"
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
