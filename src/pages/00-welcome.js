import React from "react";
import { LayoutHeader } from "../components/layout-header";
import { LayoutFooter } from "../components/layout-footer";
import { DownloadGuideAndInfoSection } from "../components/download-guide-and-info-section";
import { WorkoutDataContext } from "../contexts/workout-data-provider";
import { WelcomeUploaderSection } from "../components/welcome-uploader-section";

export default function Page() {
  const { state, dispatch } = React.useContext(WorkoutDataContext);
  return (
    <>
      <LayoutHeader />
      <WelcomeUploaderSection
        canAccessProtectedPages={state.canAccessProtectedPages}
        protectedEntryRoute="/activity-calendar"
        onRequestResetData={() => dispatch({ type: "USER_REQUESTED_RESET" })}
        onRequestDemoData={() => dispatch({ type: "USER_REQUESTED_DEMO" })}
        onRequestSetData={(raw) =>
          dispatch({ type: "USER_UPLOADED_CSV", payload: raw })
        }
      />
      <DownloadGuideAndInfoSection />
      <LayoutFooter />
    </>
  );
}

export const meta = {
  route: "/",
  title: "Welcome",
  sidebar: "Start Over",
  component: Page,
};
