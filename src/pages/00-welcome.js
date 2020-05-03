import React from "react";
import { Button } from "../components/button";
import { FileLoader } from "../components/file-loader";
import { WorkoutDataContext } from "../contexts/workout-data-provider";

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
        <WalkthroughAndMoreInfoSection />
        <PrivacyStatementSection />
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
    <section className="align-c py-10x md:py-16x">
      <div className="container d-flex flx-a-c flx-j-c flx-d-c child-my-0">
        <h1 className="type-h1-xxl mb-4x">Untitled #200</h1>
        <p className="type-para mb-4x md:mb-6x" style={{ maxWidth: 660 }}>
          After a recent workout milestone, I was wondering how best to
          visualize my own fitness journey. This site is designed to
          contextualize workout trends so that I (and now you) can gain better
          insight into progression over time and celebrate those hard-earned,
          sweaty victories.
        </p>
        {showFileUpload ? (
          <FileLoader
            onLoad={(...args) => {
              setShowFileUpload(false);
              onUserUpload(...args);
            }}
            onError={console.error}
            onAbort={console.error}
          />
        ) : canAccessProtectedPages ? (
          <div className="d-flex flx-a-c">
            <Button to={protectedEntryRoute}>Show me my charts</Button>
            <div className="px-3x md:px-4x">or</div>
            <Button onClick={onStartOver} appearance="secondary">
              Start over
            </Button>
          </div>
        ) : (
          <Button onClick={() => setShowFileUpload(true)}>
            Let's get started
          </Button>
        )}
      </div>
    </section>
  );
}

function WalkthroughAndMoreInfoSection() {
  return (
    <section className="bg-n70 py-8x md:py-10x">
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "var(--space-3x)",
        }}
      >
        <aside className="align-c d-flex flx-d-c flx-a-c">
          <h2 className="type-h3 mt-0 mb-3x">How does it work?</h2>
          <p className="type-para mt-0 mb-3x" style={{ maxWidth: 480 }}>
            Want a step-by-step guide for downloading your workout data? See
            here for the two-step walkthrough
          </p>
          <Button appearance="ghost-light">Show me how</Button>
        </aside>
        <aside className="align-c d-flex flx-d-c flx-a-c">
          <h2 className="type-h3 mt-0 mb-3x">More information</h2>
          <p className="type-para mt-0 mb-3x" style={{ maxWidth: 480 }}>
            For more information on this project, see the accompanying blog post
            on my personal site.
          </p>
          <Button href="//danny.codes" appearance="ghost-light">
            Tell me more
          </Button>
        </aside>
      </div>
    </section>
  );
}

function PrivacyStatementSection() {
  return (
    <section className="bg-n10 py-8x md:py-10x c-n80">
      <div className="container">
        <div className="d-flex flx-a-c flx-d-c md:align-c child-my-0">
          <h2 className="type-h4 my-bx">Your data is private</h2>
          <p className="type-small c-n50 my-0" style={{ maxWidth: 660 }}>
            This website does not store or retain workout data nor does your
            data ever leave your local browser. The code is open-source and the
            CI pipeline and deployment logs are public. For more information,
            check out the{" "}
            <a
              className="fw-bold c-n60"
              href="https://github.com/xdmorgan/peloton-workouts"
            >
              project on GitHub
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="bg-n0 py-3x c-n40 child-my-0 align-c">
      <div className="container">
        <p className="type-small">
          This project is not affiliated with Peloton in any way. All rights
          reserved. {YEAR}
        </p>
      </div>
    </footer>
  );
}

export const meta = {
  route: "/",
  title: "Welcome",
  component: Page,
};
