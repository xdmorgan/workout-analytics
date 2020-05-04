import React from "react";
import { Redirect } from "react-router-dom";
import { ResponsiveCalendar } from "@nivo/calendar";
import { TRANSFORMED_KEYS } from "../constants";
import { WorkoutDataContext } from "../contexts/workout-data-provider";
import { AppLayout } from "../layouts/app-layout";

export default function Page() {
  const { state } = React.useContext(WorkoutDataContext);
  return state.canAccessProtectedPages ? (
    <View data={state.transformed} />
  ) : (
    <Redirect to="/" />
  );
}

function View({ data }) {
  const { min, max, entries } = data[TRANSFORMED_KEYS.ActivityCalendar];
  return (
    <AppLayout title="Activity Calendar" nextRoute={null} previousRoute="/">
      <div className="container py-4x md:py-6x">
        <div style={{ height: 500 }}>
          <ResponsiveCalendar
            data={entries}
            from={min}
            to={max}
            emptyColor="#eeeeee"
            // colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
            colors={[
              "var(--color-r60)",
              "var(--color-r50)",
              "var(--color-r40)",
              "var(--color-r30)",
              "var(--color-r20)",
            ]}
            margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
            yearSpacing={40}
            monthBorderColor="#ffffff"
            dayBorderWidth={2}
            dayBorderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "row",
                translateY: 36,
                itemCount: 4,
                itemWidth: 42,
                itemHeight: 36,
                itemsSpacing: 14,
                itemDirection: "right-to-left",
              },
            ]}
          />
        </div>
      </div>
    </AppLayout>
  );
}

export const meta = {
  route: "/activity-calendar",
  title: "Activity Calendar",
  component: Page,
};
