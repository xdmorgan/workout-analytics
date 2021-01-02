import React from 'react';
import { Button } from './button';

export function Pagination({
  previousRoute = null,
  previousLabel = null,
  nextRoute = null,
  nextLabel = null,
}) {
  return (
    <nav className="container py-4x md:py-6x d-flex flx-a-c flx-j-sb">
      <div>
        <Button to={previousRoute} appearance="ghost" disabled={!previousRoute}>
          <>Previous</>
          {previousLabel && (
            <span className="d-none lg:d-inline">: {previousLabel}</span>
          )}
        </Button>
      </div>
      <div>
        <Button to={nextRoute} appearance="secondary" disabled={!nextRoute}>
          <>Next</>
          {nextLabel && (
            <span className="d-none lg:d-inline">: {nextLabel}</span>
          )}
        </Button>
      </div>
    </nav>
  );
}
