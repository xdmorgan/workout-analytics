import React from "react";
import { DownloadGuideAndInfoSection } from "../components/download-guide-and-info-section";
import { WorkoutDataContext } from "../contexts/workout-data-provider";
import { WelcomeUploaderSection } from "../components/welcome-uploader-section";

export const meta = {
  route: "/",
  title: "Welcome",
  sidebar: "Get Started",
  component: Page,
  protected: false,
  pagination: {
    previous: null,
    next: null,
  },
};

export default function Page() {
  const { state, dispatch } = React.useContext(WorkoutDataContext);
  return (
    <>
      <WelcomeUploaderSection
        canAccessProtectedPages={state.canAccessProtectedPages}
        protectedEntryRoute="/totals"
        onRequestResetData={() => dispatch({ type: "USER_REQUESTED_RESET" })}
        onRequestDemoData={() => dispatch({ type: "USER_REQUESTED_DEMO" })}
        onRequestSetData={(raw) =>
          dispatch({ type: "USER_UPLOADED_CSV", payload: raw })
        }
      />
      <DownloadGuideAndInfoSection />
    </>
  );
}
