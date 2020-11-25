import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import * as TRANSFORMED_KEYS from "../transforms/keys";
import { ContentHeader } from "../components/content-header";
import { ContentSection } from "../components/content-section";
import { Pagination } from "../components/pagination";

export const meta = {
  route: "/instructors",
  title: "Favorite Instructors",
  sidebar: "Favorite Instructors",
  component: Page,
  protected: true,
};

export function Page({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.TopInstructors];
  return (
    <>
      <ContentHeader
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      >
        {pageMetadata.title}
      </ContentHeader>
      {Object.keys(pageWorkoutData.chartData).map((key, idx) => (
        <BarChartSection
          key={key}
          type={key}
          data={pageWorkoutData.chartData[key]}
        />
      ))}
      <Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </>
  );
}

function BarChartSection({ type, data }) {
  return (
    <ContentSection>
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
    </ContentSection>
  );
}
