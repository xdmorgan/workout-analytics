import React from "react";

export function ContentSection({ divider, ...props }) {
  return (
    <div className="container mb-6x md:mb-8x xl:mb-12x">
      <div {...props}></div>
    </div>
  );
}
