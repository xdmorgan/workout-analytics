import React from "react";
import { Button } from "../components/button";
import { FileLoader } from "../components/file-loader";
import { WorkoutDataContext } from "../contexts/workout-data-provider";

import styles from "./welcome.module.scss";

const YEAR = new Date().getFullYear();

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
        <HR className="container c-n70" />
        <WalkthroughAndMoreInfoSection />
      </main>
      <FooterSection />
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
    <div className="d-flex flx-a-c flx-j-c flx-d-c h-fill rc-normal c-n30 p-4x">
      <div>
        <Button size="large" to={protectedEntryRoute}>
          View workouts
        </Button>
        <Button
          className="ml-3x"
          appearance="secondary"
          size="large"
          onClick={onStartOver}
        >
          Reset
        </Button>
      </div>
      <p className="type-small mt-4x mb-0 align-c" style={{ maxWidth: 360 }}>
        And we're done. Your data has been processed and is ready for review!
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

function FooterSection() {
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

function HR(props) {
  return (
    <div {...props}>
      <hr
        style={{
          height: 1,
          width: "100%",
          background: "currentColor",
          margin: 0,
          padding: 0,
          outline: "none",
          border: "none",
        }}
      />
    </div>
  );
}

export const meta = {
  route: "/",
  title: "Welcome",
  component: Page,
};
