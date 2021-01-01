import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ContentHeader } from '../components/content-header';
import { ContentSection } from '../components/content-section';
import { Pagination } from '../components/pagination';
import * as RAW_KEYS from '../data/keys';
import * as TRANSFORMED_KEYS from '../transforms/keys';
import { SelectInput } from '../components/select-input';
import { DataTooltip } from '../components/data-tooltip';
import { instructorData } from '../data/instructor-data';

const { AverageResistance, AverageCadenceRPM, AverageWatts } = RAW_KEYS;

export const meta = {
  route: '/average-metrics',
  title: 'Average Metrics',
  sidebar: 'Average Metrics',
  component: Page,
  protected: true,
};

function getInstructorImage(name: string): string {
  const match = instructorData.find(instructor => instructor.name === name);
  return match ? match.image_url : '';
}

const OPTIONS = [AverageResistance, AverageCadenceRPM, AverageWatts, 'All'];

export function Page({ allWorkoutData, pageMetadata }) {
  const pageWorkoutData = allWorkoutData[TRANSFORMED_KEYS.AverageMetrics];
  const [option, setOption] = useState(OPTIONS[0]);

  return (
    <>
      <ContentHeader
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      >
        {pageMetadata.title}
      </ContentHeader>
      <ContentSection>
        <div className="lg:d-flex mb-2x">
          <SelectInput
            size="small"
            value={option}
            onChange={e => setOption(e.target.value)}
          >
            {OPTIONS.map(opt => (
              <option key={opt}>{opt}</option>
            ))}
          </SelectInput>
        </div>
        <div style={{ height: 600 }}>
          <ResponsiveLine
            curve="monotoneX"
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
            data={Object.values(pageWorkoutData).filter(({ id, ...rest }) => {
              console.log(rest);
              return id === option || option === 'All';
            })}
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
              legend: 'Metric',
              legendPosition: 'middle',
              legendOffset: -60,
            }}
            axisBottom={{
              format: '%b %d %Y',
              orient: 'left',
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 45,
              legendPosition: 'middle',
              legendOffset: 46,
            }}
            tooltip={({ point }) => {
              const { data } = point;
              console.log(data);
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
                        {point.serieId}: <strong>{data.yFormatted}</strong>
                      </p>
                    </div>
                  </div>
                </DataTooltip>
              );
            }}
            enableSlices={option === 'All' ? 'x' : false}
          />
        </div>
      </ContentSection>
      <Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </>
  );
}
