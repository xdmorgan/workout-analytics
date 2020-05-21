import React from "react";
import { ScatterPlot } from "@nivo/scatterplot";
import { AppLayout } from "../layouts/app-layout";
import { ProtectedPage } from "../components/protected-page";
import { TRANSFORMED_KEYS } from "../constants";

export const meta = {
  route: "/outputs",
  title: "Cycling Outputs",
  sidebar: "Cycling Outputs",
  component: Page,
  pagination: {
    previous: "/instructors",
    next: null,
  },
};

export function Page() {
  return <ProtectedPage component={PageWithData} />;
}

function PageWithData({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.CyclingOutputs];
  console.log(pageWorkoutData, pageMetadata);
  return (
    <AppLayout
      title={pageMetadata.title}
      previousRoute={pageMetadata.pagination.previous}
      nextRoute={pageMetadata.pagination.next}
    >
      {Object.keys(pageWorkoutData.chartData).map((key, idx) => (
        <ScatterPlotSection
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

function ScatterPlotSection({ type, data, divider }) {
  return (
    <AppLayout.Content divider={divider}>
      <h2 className="type-h2">{type}</h2>
      <div style={{ height: 600 }}>
        <ScatterPlot
          width={1180}
          height={600}
          blendMode="multiply"
          margin={{ top: 24, right: 120, bottom: 70, left: 90 }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 130,
              translateY: 0,
              itemWidth: 80,
              itemHeight: 12,
              itemsSpacing: 5,
              itemDirection: "left-to-right",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          data={data}
          xScale={{
            type: "time",
            format: "%Y-%m-%d",
            precision: "day",
          }}
          xFormat="time:%b %d %Y"
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Output",
            legendPosition: "middle",
            legendOffset: -60,
          }}
          axisBottom={{
            format: "%b %d %Y",
            // tickValues: "every 2 days",
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 45,
            legendPosition: "middle",
            legendOffset: 46,
          }}
        />
      </div>
    </AppLayout.Content>
  );
}
