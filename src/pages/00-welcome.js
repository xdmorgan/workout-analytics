import React from "react";
import { Button } from "../components/button";
import { FileLoader } from "../components/file-loader";
import { LayoutFooter } from "../components/layout-footer";
import { HorizontalRule } from "../components/horizontal-rule";
import { WorkoutDataContext } from "../contexts/workout-data-provider";

import styles from "./welcome.module.scss";

export default function Page() {
  const { state, dispatch } = React.useContext(WorkoutDataContext);
  return (
    <>
      <main>
        <WelcomeHeroSection
          canAccessProtectedPages={state.canAccessProtectedPages}
          protectedEntryRoute="/activity-calendar"
          onStartOver={() => console.log("reset app state")}
          onUserUpload={(raw) =>
            dispatch({ type: "USER_UPLOADED_CSV", payload: raw })
          }
        />
        <HorizontalRule className="container c-n50" />
        <WalkthroughAndMoreInfoSection />
      </main>
      <LayoutFooter />
    </>
  );
}

function WelcomeHeroSection({
  canAccessProtectedPages,
  protectedEntryRoute,
  onUserUpload,
  onStartOver,
}) {
  const [showFileUpload, setShowFileUpload] = React.useState(false);
  return (
    <section className="py-10x md:py-16x">
      <div className="container child-my-0">
        <div className={styles.hero}>
          <div className="py-8x">
            <h1 className="type-h1-xxl mb-4x">Peloton Analytics</h1>
            <p className="type-para mb-4x md:mb-6x">
              After a recent workout milestone, I was wondering how best to
              visualize my own fitness journey. This site is designed to
              visualize workout trends so that I (and now you) can gain better
              insight into progression over time and celebrate those hard-earned
              victories!
            </p>
          </div>
          <div>
            {showFileUpload ? (
              <FileLoader
                accept=".csv"
                onLoad={(...args) => {
                  setShowFileUpload(false);
                  onUserUpload(...args);
                }}
                onError={console.error}
                onAbort={console.error}
              />
            ) : canAccessProtectedPages ? (
              <UploaderCTA
                protectedEntryRoute={protectedEntryRoute}
                onStartOver={onStartOver}
              />
            ) : (
              <GetStartedCTA onClick={() => setShowFileUpload(true)} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function GetStartedCTA({ onClick }) {
  return (
    <div className="d-flex flx-a-c flx-j-c flx-d-c h-fill rc-normal bg-n80 c-n30 p-4x">
      <Button className="mt-3x" size="large" onClick={onClick}>
        Analyze my workouts
      </Button>
      <p className="type-small mt-4x mb-0 align-c" style={{ maxWidth: 360 }}>
        If you haven't downloaded your workout data yet, scroll down for a video
        walkthrough.
      </p>
    </div>
  );
}

function UploaderCTA({ protectedEntryRoute, onStartOver }) {
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
          onClick={onStartOver}
        >
          Start over
        </Button>
      </div>
      <p className="type-small mt-4x mb-0 align-c" style={{ maxWidth: 360 }}>
        That's it! Your data has been processed and is ready for review.
      </p>
    </div>
  );
}

function WalkthroughAndMoreInfoSection() {
  return (
    <section className="py-10x md:py-16x">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-3x)",
        }}
      >
        <aside>
          <h2 className="type-h2 mt-0 mb-3x">How does it work?</h2>
          <p className="type-para mt-0 mb-4x" style={{ maxWidth: 480 }}>
            Want a step-by-step guide for downloading your workout data? See
            here for the two-step walkthrough
          </p>
          <Button appearance="secondary">Show me how</Button>
        </aside>
        <aside>
          <h2 className="type-h2 mt-0 mb-3x">More information</h2>
          <p className="type-para mt-0 mb-4x" style={{ maxWidth: 480 }}>
            For more information on this project, see the accompanying blog post
            on my personal site.
          </p>
          <Button href="//danny.codes" appearance="secondary">
            Tell me more
          </Button>
        </aside>
      </div>
    </section>
  );
}

export const meta = {
  route: "/",
  title: "Welcome",
  sidebar: "Start Over",
  component: Page,
};
