import cx from 'classnames';
import { ReactNode } from 'react';
import styles from './app-layout.module.scss';

interface AppLayoutProps {
  children: ReactNode;
  navigation: ReactNode;
}

export function AppLayout({ children, navigation }: AppLayoutProps) {
  return (
    <div className={cx(styles.layout)}>
      <div>
        <a className={cx(styles.layout__skip, 'sr-focus')} href="#content">
          Skip to content
        </a>
      </div>
      <aside className={cx(styles.layout__navigation)}>{navigation}</aside>
      <main id="content" className={cx(styles.layout__content)}>
        {children}
      </main>
    </div>
  );
}
