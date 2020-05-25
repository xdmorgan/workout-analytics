import React from "react";
import cx from "classnames";
import { Button } from "../components/button";
import { FileLoader } from "../components/file-loader";
import styles from "./welcome-uploader-section.module.scss";

export function WelcomeUploaderSection({
  canAccessProtectedPages,
  protectedEntryRoute,
  onRequestSetData,
  onRequestResetData,
  onRequestDemoData,
  className,
  ...props
}) {
  const [showFileUpload, setShowFileUpload] = React.useState(false);
  return (
    <section {...props} className={cx("container", className)}>
      <div className={cx(styles.hero, "pt-4x")}>
        {showFileUpload ? (
          <FileLoader
            accept=".csv"
            onLoad={(...args) => {
              setShowFileUpload(false);
              onRequestSetData(...args);
            }}
            onError={console.error}
            onAbort={console.error}
            onCancel={() => setShowFileUpload(false)}
          />
        ) : canAccessProtectedPages ? (
          <UploaderCTA
            protectedEntryRoute={protectedEntryRoute}
            onReset={onRequestResetData}
          />
        ) : (
          <GetStartedCTA
            onSelectUploadPath={() => setShowFileUpload(true)}
            onSelectDemoPath={onRequestDemoData}
          />
        )}
      </div>
    </section>
  );
}

function GetStartedCTA({ onSelectUploadPath, onSelectDemoPath }) {
  return (
    <UploaderBlock
      className="bg-n80"
      heading="Start here"
      label="If you haven't exported your workouts yet, see below for more info and the how-to guide."
      buttons={[
        <Button
          key="analyze"
          theme="dark"
          size="large"
          appearance="secondary"
          onClick={onSelectUploadPath}
        >
          Analyze my workouts
        </Button>,
        <Button
          key="demo"
          size="large"
          appearance="ghost"
          onClick={onSelectDemoPath}
        >
          See demo
        </Button>,
      ]}
    />
  );
}

function UploaderCTA({ protectedEntryRoute, onReset }) {
  return (
    <UploaderBlock
      className="bg-g10 c-n90"
      heading="You're all set!"
      label="Your wourkout data was successfully processed and is now ready for review."
      buttons={[
        <Button
          key="workouts"
          theme="dark"
          size="large"
          to={protectedEntryRoute}
        >
          Let's go!
        </Button>,
        <Button
          key="reset"
          theme="dark"
          appearance="ghost"
          size="large"
          onClick={onReset}
        >
          Start over
        </Button>,
      ]}
    />
  );
}

function UploaderBlock({ label, buttons, heading, className, ...props }) {
  return (
    <div
      {...props}
      className={cx(
        "d-flex flx-a-c flx-j-c flx-d-c h-fill rc-normal p-3x",
        className
      )}
    >
      <h1 className="type-h1-xxl mt-0 mb-4x align-c">{heading}</h1>
      <div className="align-c child-my-0 xl:d-flex">
        {buttons.map((el, idx) => {
          return (
            <div
              key={el.key}
              className={cx("mb-2x xl:mb-0", { "xl:ml-2x": idx > 0 })}
            >
              {el}
            </div>
          );
        })}
      </div>
      {label ? (
        <p className="type-small mt-4x mb-0 align-c" style={{ maxWidth: 360 }}>
          {label}
        </p>
      ) : null}
    </div>
  );
}
