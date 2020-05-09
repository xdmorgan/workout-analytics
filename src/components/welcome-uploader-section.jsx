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
    <section
      {...props}
      className={cx(
        "py-12x md:py-16x",
        {
          "bg-g10": canAccessProtectedPages,
          "c-n90": canAccessProtectedPages,
          "bg-n80": !canAccessProtectedPages,
        },
        className
      )}
    >
      <div className="container child-my-0">
        <div className={styles.hero}>
          <div className="lg:py-8x">
            {canAccessProtectedPages ? (
              <h1 className="type-h1-xl mb-4x">You're good to go</h1>
            ) : (
              <h1 className="type-h1-xl mb-4x">Let's get started</h1>
            )}
            <p className="type-para mb-4x md:mb-6x">
              After a recent exercise milestone, I wanted a way to analyze my
              fitness journey so I built this tool to visualize Peloton workout
              data and help celebrate those hard-earned victories.
            </p>
          </div>
          <div>
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
        </div>
      </div>
    </section>
  );
}

function GetStartedCTA({ onSelectUploadPath, onSelectDemoPath }) {
  return (
    <UploaderBlock
      label="If you haven't exported your workouts yet, see below for more information and a video guide."
      buttons={[
        <Button key="analyze" size="large" onClick={onSelectUploadPath}>
          Analyze my workouts
        </Button>,
        <Button
          key="demo"
          size="large"
          appearance="ghost"
          onClick={onSelectDemoPath}
        >
          Use demo data
        </Button>,
      ]}
    />
  );
}

function UploaderCTA({ protectedEntryRoute, onReset }) {
  return (
    <UploaderBlock
      label="That's it! Your data has been processed and is ready for review."
      buttons={[
        <Button
          key="workouts"
          theme="dark"
          size="large"
          to={protectedEntryRoute}
        >
          Take me there
        </Button>,
        <Button
          key="reset"
          theme="dark"
          appearance="ghost"
          size="large"
          onClick={onReset}
        >
          Reset
        </Button>,
      ]}
    />
  );
}

function UploaderBlock({ label, buttons, className, ...props }) {
  return (
    <div
      {...props}
      className={cx(
        "d-flex flx-a-c flx-j-c flx-d-c h-fill rc-normal p-3x",
        className
      )}
    >
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
