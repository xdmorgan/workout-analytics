import React from "react";
import cx from "classnames";
import { useLocation } from "react-router-dom";
import pages from "../pages";
import { LayoutFooter } from "../components/layout-footer";
import { LayoutHeader } from "../components/layout-header";
import { ContentWithSidebar } from "../components/content-with-sidebar";
import { ContentHeader } from "../components/content-header";
import { Button } from "../components/button";
import { LinkList } from "../components/link-list";
import styles from "./app-layout.module.scss";
import { HorizontalRule } from "../components/horizontal-rule";

export function AppLayout({ children, title, nextRoute, previousRoute }) {
  const location = useLocation();
  return (
    <div className={cx(styles.layout)}>
      <div className={styles.layout__header}>
        <LayoutHeader />
      </div>
      <main className={cx(styles.layout__main)}>
        <ContentWithSidebar
          sidebar={
            <div
              style={{
                position: "sticky",
                top: "var(--space-6x)",
              }}
            >
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
          }
        >
          <ContentHeader previousRoute={previousRoute} nextRoute={nextRoute}>
            {title}
          </ContentHeader>

          {children}
        </ContentWithSidebar>
      </main>
      <div className={styles.layout__footer}>
        <LayoutFooter />
      </div>
    </div>
  );
}

function Content({ className, divider, ...props }) {
  const content = (
    <div {...props} className={cx("my-6x md:my-8x xl:my-12x", className)} />
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
    <>
      <HorizontalRule className="my-4x md:my-6x c-n50" />
      <nav className="d-flex flx-a-c flx-j-sb">
        <Button to={previousRoute} appearance="ghost" disabled={!previousRoute}>
          <>Previous</>
          {previousLabel && (
            <span className="d-none lg:d-inline">: {previousLabel}</span>
          )}
        </Button>
        <Button to={nextRoute} appearance="secondary" disabled={!nextRoute}>
          <>Next</>
          {nextLabel && (
            <span className="d-none lg:d-inline">: {nextLabel}</span>
          )}
        </Button>
      </nav>
    </>
  );
}

AppLayout.Content = Content;
AppLayout.Pagination = Pagination;
