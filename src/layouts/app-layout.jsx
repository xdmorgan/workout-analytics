import React from "react";
import cx from "classnames";
import { useLocation } from "react-router-dom";
import pages from "../pages";
import { LayoutFooter } from "../components/layout-footer";
import { LayoutHeader } from "../components/layout-header";
import { ContentWithSidebar } from "../components/content-with-sidebar";
import { ContentHeader } from "../components/content-header";

import { LinkList } from "../components/link-list";
import styles from "./app-layout.module.scss";

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

          <div>{children}</div>
        </ContentWithSidebar>
      </main>
      <div className={styles.layout__footer}>
        <LayoutFooter />
      </div>
    </div>
  );
}
