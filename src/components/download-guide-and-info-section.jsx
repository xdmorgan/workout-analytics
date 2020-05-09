import React from "react";
import cx from "classnames";
import { Button } from "./button";
import { HorizontalRule } from "./horizontal-rule";
import styles from "./download-guide-and-info-section.module.scss";

export function DownloadGuideAndInfoSection() {
  return (
    <section className="py-8x md:py-12x lg:py-16x">
      <div className={cx("container", styles.container)}>
        <div>
          <h2 className="type-h2 mt-0 mb-3x">How do I export my&nbsp;data?</h2>
          <p className="type-para mt-0 mb-4x" style={{ maxWidth: 480 }}>
            Want a step-by-step guide for downloading your workout data? See
            here for the two-step walkthrough
          </p>
          <Button appearance="secondary">Show me how</Button>
        </div>
        <HorizontalRule className="md:d-none c-n60" />
        <div>
          <h2 className="type-h2 mt-0 mb-3x">What even is this&nbsp;thing?</h2>
          <p className="type-para mt-0 mb-4x" style={{ maxWidth: 480 }}>
            For more information on this project, see the accompanying blog post
            on my personal blog.
          </p>
          <Button href="//danny.codes" appearance="secondary">
            Tell me more
          </Button>
        </div>
      </div>
    </section>
  );
}
