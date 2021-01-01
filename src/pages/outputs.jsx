import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import { Button } from '../components/button';
import { SelectInput } from '../components/select-input';
import { ContentHeader } from '../components/content-header';
import * as TRANSFORMED_KEYS from '../transforms/keys';
import { ContentSection } from '../components/content-section';
import { Pagination } from '../components/pagination';
import { DataTooltip } from '../components/data-tooltip';
import { instructorData } from '../data/instructor-data';

export const meta = {
  route: '/outputs',
  title: 'Cycling Outputs',
  sidebar: 'Cycling Outputs',
  component: Page,
  protected: true,
};

function getInstructorImage(name: string): string {
  const match = instructorData.find(instructor => instructor.name === name);
  return match ? match.image_url : '';
}

export function Page({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.CyclingOutputs];
  return (
    <>
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
    case 'SET_BY_ID':
      return {
        ...state,
        [action.payload.id]: action.payload.value,
      };
    default:
      throw new Error();
  }
};

const TIME_OPTIONS = ['This month', 'This year', 'Last year', 'All-time'];
function ResponsiveLineSection({ type, data, defaultSelected }) {
  const [option, setOption] = React.useState(TIME_OPTIONS.slice(-1)[0]);
  const [toggleState, dispatchToggle] = React.useReducer(
    toggleReducer,
    defaultSelected
  );
  console.log({ data });
  return (
    <ContentSection>
      <h2 className="type-h2">{type}</h2>
      <div className="lg:d-flex mb-2x">
        <div className="flx-g-1 lg:pr-2x">
          <SelectInput
            size="small"
            value={option}
            onChange={e => setOption(e.target.value)}
          >
            {TIME_OPTIONS.map(opt => (
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
                onClick={e =>
                  dispatchToggle({
                    type: 'SET_BY_ID',
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
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 130,
              translateY: 0,
              itemWidth: 80,
              itemHeight: 12,
              itemsSpacing: 5,
              itemDirection: 'left-to-right',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          data={data.filter(d => toggleState[d.id])}
          xScale={{
            type: 'time',
            format: '%Y-%m-%d',
            precision: 'day',
          }}
          xFormat="time:%b %d %Y"
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Output',
            legendPosition: 'middle',
            legendOffset: -60,
          }}
          axisBottom={{
            format: '%b %d %Y',
            // tickValues: "every 2 days",
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 45,
            legendPosition: 'middle',
            legendOffset: 46,
          }}
          tooltip={({ point: { data } }) => {
            const img = getInstructorImage(data.instructor);
            return (
              <DataTooltip title={data.xFormatted}>
                <div className="d-flex flx-a-fs">
                  <img
                    src={img}
                    height="60"
                    width="60"
                    alt={data.instructor}
                    style={{
                      borderRadius: '50%',
                      border: '2px solid var(--color-n70)',
                    }}
                  />
                  <div className="ml-1x">
                    <p className="type-caption">{data.title}</p>
                    <p className="type-caption">{data.instructor}</p>
                    <p className="mt-1x">
                      Output: <strong>{data.yFormatted}</strong>
                    </p>
                  </div>
                </div>
              </DataTooltip>
            );
          }}
        />
      </div>
    </ContentSection>
  );
}
