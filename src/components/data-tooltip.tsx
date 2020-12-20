// This is just the UI of a tooltip.
// Rendering/positioning logic handled by the various Nivo components `tooltip` prop
import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './data-tooltip.module.scss';

interface Props {
  title?: string;
  children: ReactNode;
}

export function DataTooltip({ title, children }: Props) {
  return (
    <div className={styles.tooltip}>
      {title ? (
        <p
          className={cx(styles.tooltip__title, 'p-05x type-caption')}
          data-testid="tooltip-title"
        >
          {title}
        </p>
      ) : null}
      <div className="p-1x">{children}</div>
    </div>
  );
}
