import React from 'react';
import cx from 'classnames';

function StyleguideGrid({ style = {}, ...props }) {
  return (
    <div
      {...props}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
        gap: 'var(--space-3x',
        ...style,
      }}
    />
  );
}

function GridItem({ className, ...props }) {
  return <div {...props} className={cx(className, 'child-my-0 p-2x')} />;
}

StyleguideGrid.Item = GridItem;

function StyleguideLabel({ className, ...props }) {
  return <p {...props} className={cx('type-caption', className)} />;
}

function StyleguideSection({ className, ...props }) {
  return (
    <section
      {...props}
      className={cx(className, 'container py-6x md:py-8x child-my-0')}
    />
  );
}

function SectionTitle({ className, ...props }) {
  return (
    // eslint-disable-next-line
    <h2 {...props} className={cx(className, 'type-h2 my-4x')} />
  );
}

StyleguideSection.Title = SectionTitle;

export { StyleguideGrid, StyleguideLabel, StyleguideSection };
