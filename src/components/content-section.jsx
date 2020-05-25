import React from "react";
import { HorizontalRule } from "./horizontal-rule";

export function ContentSection({ divider, ...props }) {
  const content = (
    <div className="container mb-6x md:mb-8x xl:mb-12x">
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
