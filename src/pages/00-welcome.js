import React from "react";
import { Button } from "../components/button";
import { FileLoader } from "../components/file-loader";
import { WorkoutDataContext } from "../contexts/workout-data-provider";

export default function Page() {
  const { state, dispatch } = React.useContext(WorkoutDataContext);
  if (!state.canAccessProtectedPages) {
    return (
      <FileLoader
        onLoad={(raw) => dispatch({ type: "USER_UPLOADED_CSV", payload: raw })}
        onError={console.error}
        onAbort={console.error}
      />
    );
  }
  return (
    <main>
      <div className="bg-n0 c-n70 align-c py-1x">
        <div className="container child-my-0">
          <p className="type-small">
            Thanks for stopping by! Check out this{" "}
            <a
              className="fw-bold c-n80"
              href="https://github.com/xdmorgan/peloton-workoutus"
            >
              project on GitHub
            </a>
          </p>
        </div>
      </div>
      <div className="bg-n10 c-n80 align-c py-10x md:py-16x">
        <div className="container d-flex flx-a-c flx-j-c flx-d-c child-my-0">
          <h1 className="type-h1-xxl mb-4x">
            {" "}
            <span role="img" aria-label="cyclist">
              🚴‍♂️
            </span>
            <> &times; </>
            <span role="img" aria-label="one hundred">
              💯
            </span>
            <> &times; </>
            <span role="img" aria-label="peace">
              ✌️
            </span>
          </h1>
          <div
            className="type-para mb-3x md:mb-6x mx-auto child-my-0"
            style={{ maxWidth: 660 }}
          >
            <p>workouts, innit</p>
          </div>
          <div className="mb-4x md:mb-6x md:d-flex">
            <div className="d-block mb-3x md:mb-0">
              <Button>Analyze my workouts</Button>
            </div>
            <div className="d-none md:d-flex px-4x flx-a-c flx-j-c c-n50">
              or
            </div>
            <div className="d-block">
              <Button appearance="secondary">Use test data instead</Button>
            </div>
          </div>
          <p className="type-small c-n50 my-0" style={{ maxWidth: 660 }}>
            This website does not store data of any kind nor analyze workouts
            beyond what is necessary to render the charts on the following
            pages. The full source code is open-source and available on GitHub.
            For more information, see here.
          </p>
        </div>
      </div>
      <div className="container wysiwyg child-my-0">
        <a href="/activity-calendar">activity-calendar Page</a>
      </div>
    </main>
  );
}

export const meta = {
  route: "/",
  title: "Welcome",
  component: Page,
};
