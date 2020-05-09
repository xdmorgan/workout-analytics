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
        "py-10x md:py-16x",
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
          <div className="py-8x">
            {canAccessProtectedPages ? (
              <h1 className="type-h1-xxl mb-4x">You're good to go</h1>
            ) : (
              <h1 className="type-h1-xxl mb-4x">Let's get started</h1>
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
    <div className="d-flex flx-a-c flx-j-c flx-d-c h-fill rc-normal bg-n80 c-n30 p-4x">
      <div>
        <Button size="large" onClick={onSelectUploadPath}>
          Analyze my workouts
        </Button>
        <Button
          size="large"
          className="ml-3x"
          appearance="ghost"
          onClick={onSelectDemoPath}
        >
          See demo
        </Button>
      </div>
      <p className="type-small mt-4x mb-0 align-c" style={{ maxWidth: 360 }}>
        If you haven't exported your workouts yet, see below for more
        information and a video guide.
      </p>
    </div>
  );
}

function UploaderCTA({ protectedEntryRoute, onReset }) {
  return (
    <div className="d-flex flx-a-c flx-j-c flx-d-c h-fill rc-normal bg-g10 c-n70 p-4x">
      <div>
        <Button theme="dark" size="large" to={protectedEntryRoute}>
          View workouts
        </Button>
        <Button
          theme="dark"
          className="ml-3x"
          appearance="ghost"
          size="large"
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
      <p className="type-small mt-4x mb-0 align-c" style={{ maxWidth: 360 }}>
        That's it! Your data has been processed and is ready for review.
      </p>
    </div>
  );
}
