import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { AppLayout } from "../layouts/app-layout";
import { ProtectedPage } from "../components/protected-page";
import { TRANSFORMED_KEYS } from "../constants";

export const meta = {
  route: "/instructors",
  title: "Favorite Instructors",
  sidebar: "Favorite Instructors",
  component: Page,
  pagination: {
    previous: "/activity",
    next: "/outputs",
  },
};

export function Page() {
  return <ProtectedPage component={PageWithData} />;
}

function PageWithData({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.TopInstructors];
  return (
    <AppLayout
      title={pageMetadata.title}
      previousRoute={pageMetadata.pagination.previous}
      nextRoute={pageMetadata.pagination.next}
    >
      {Object.keys(pageWorkoutData.chartData).map((key, idx) => (
        <BarChartSection
          key={key}
          type={key}
          data={pageWorkoutData.chartData[key]}
          divider={idx > 0 ? "before" : undefined}
        />
      ))}
      <AppLayout.Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </AppLayout>
  );
}

function BarChartSection({ type, data, divider }) {
  return (
    <AppLayout.Content divider={divider}>
      <h2 className="type-h2">{type}</h2>
      <div style={{ height: 420 }}>
        <ResponsiveBar
          data={data}
          margin={{ top: 50, right: 0, bottom: 100, left: 32 }}
          padding={0.3}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          // colors={["var(--color-r40)"]}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 40,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
        />
      </div>
    </AppLayout.Content>
  );
}
