import React from "react";

const YEAR = new Date().getFullYear();

export function LayoutFooter() {
  return (
    <footer className="bg-n0 c-n90 py-8x">
      <div className="container child-my-0 mb-3x">
        <h2 className="type-h4">Peloton Analytics</h2>
      </div>
      <div className="container child-my-0 mb-3x">
        <p className="type-small c-n50 my-0" style={{ maxWidth: 480 }}>
          This website does not store or retain workout data nor does your data
          ever leave your local browser. The code is open-source for more
          information, check out the{" "}
          <a
            className="fw-bold c-n60"
            href="https://github.com/xdmorgan/peloton-workouts"
          >
            project on GitHub
          </a>
        </p>
      </div>
      <div className="container child-my-0 c-n40">
        <p className="type-caption">
          This project is not affiliated with Peloton in any way. All rights
          reserved. {YEAR}
        </p>
      </div>
    </footer>
  );
}
