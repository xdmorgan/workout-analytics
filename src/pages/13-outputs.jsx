import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Button } from "../components/button";
import { SelectInput } from "../components/select-input";
import { ContentHeader } from "../components/content-header";
import { TRANSFORMED_KEYS } from "../constants";
import { ContentSection } from "../components/content-section";
import { Pagination } from "../components/pagination";

export const meta = {
  route: "/outputs",
  title: "Cycling Outputs",
  sidebar: "Cycling Outputs",
  component: Page,
  protected: true,
  pagination: {
    previous: "/instructors",
    next: null,
  },
};

export function Page({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.CyclingOutputs];
  console.log(pageWorkoutData, pageMetadata);
  return (
    <>
      {/* {Object.keys(pageWorkoutData.chartData).map((key, idx) => (
        <ScatterPlotSection
          key={key}
          type={key}
          data={pageWorkoutData.chartData[key]}
          divider={idx > 0 ? "before" : undefined}
        />
      ))} */}
      <ContentHeader
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      >
        {pageMetadata.title}
      </ContentHeader>
      <ResponsiveLineSection
        data={Object.values(pageWorkoutData.byRideLength)}
        defaultSelected={Object.keys(pageWorkoutData.byRideLength).reduce(
          (acc, cur) => ({ ...acc, [cur]: true }),
          {}
        )}
        divider="before"
      />
      <Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </>
  );
}

const toggleReducer = (state, action) => {
  switch (action.type) {
    case "SET_BY_ID":
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    default:
      throw new Error();
  }
};

const TIME_OPTIONS = ["This month", "This year", "Last year", "All-time"];
function ResponsiveLineSection({ type, data, defaultSelected }) {
  const [option, setOption] = React.useState(TIME_OPTIONS.slice(-1)[0]);
  const [toggleState, dispatchToggle] = React.useReducer(
    toggleReducer,
    defaultSelected
  );
  return (
    <ContentSection>
      <h2 className="type-h2">{type}</h2>
      <div className="lg:d-flex mb-2x">
        <div className="flx-g-1 lg:pr-2x">
          <SelectInput
            size="small"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            {TIME_OPTIONS.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </SelectInput>
        </div>
        <div className="flx-s-0">
          <Button.Group>
            {data.map(({ id }) => (
              <Button
                appearance="secondary"
                key={id}
                size="small"
                aria-pressed={toggleState[id]}
                onClick={(e) =>
                  dispatchToggle({
                    type: "SET_BY_ID",
                    payload: { id, value: !toggleState[id] },
                  })
                }
              >
                {id}
              </Button>
            ))}
          </Button.Group>
        </div>
      </div>
      <div style={{ height: 600 }}>
        <ResponsiveLine
          curve="monotoneX"
          // width={1180}
          // height={600}
          pointLabel="y"
          pointLabelYOffset={-12}
          useMesh={true}
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
          data={data.filter((d) => toggleState[d.id])}
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
    </ContentSection>
  );
}
