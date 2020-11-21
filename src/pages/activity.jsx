import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import { TRANSFORMED_KEYS } from "../constants";
import { SelectInput } from "../components/select-input";
import { ContentHeader } from "../components/content-header";
import { ContentSection } from "../components/content-section";
import { Pagination } from "../components/pagination";

const EMPTY_COLOR = "var(--color-n80)";
const ACTIVITY_COLORS = [
  "var(--color-r80)",
  "var(--color-r70)",
  "var(--color-r60)",
  "var(--color-r50)",
  "var(--color-r40)",
  "var(--color-r30)",
  "var(--color-r20)",
  "var(--color-r10)",
];

export const meta = {
  route: "/activity",
  title: "Annual Activity",
  sidebar: "Annual Activity",
  component: Page,
  protected: true,
};

export function Page({ allWorkoutData, pageMetadata }) {
  const { years, entries } = allWorkoutData[TRANSFORMED_KEYS.ActivityCalendar];
  // const contentRef = React.useRef(null);
  // const [contentWidth, setContentWidth] = React.useState(null);

  // React.useEffect(() => {
  //   function onResize() {
  //     if (contentRef && contentRef.current) {
  //       const { width } = contentRef.current.getBoundingClientRect();
  //       setContentWidth(width);
  //     }
  //   }
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // });

  return (
    <>
      <ContentHeader
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      >
        {pageMetadata.title}
      </ContentHeader>
      <ActivityCalendarSection years={years} entries={entries} />
      <Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </>
  );
}

function ActivityCalendarSection({ years, entries }) {
  const [last] = Object.keys(years).slice(-1);
  const [year, setYear] = React.useState(last);
  const arr = Object.values(entries[year]);
  const [wpw, wpy] = [3, 214];
  return (
    <ContentSection>
      <header className="md:d-flex flx-a-fe flx-j-sb mb-2x mb-4x">
        <div className="wysiwyg child-my-0 md:pr-4x">
          <h2>By year</h2>
          <p style={{ maxWidth: "60ch" }}>
            <>So far in {year}, you've averaged </>
            <strong>
              <span className="c-r30">{wpw}</span> workouts per week
            </strong>
            <>. At that frequency, you're on track to reach an </>
            <strong>
              annual total of <span className="c-r30">{wpy}</span> workouts.
            </strong>
          </p>
        </div>
        <div className="mt-2x md:mt-0">
          <SelectInput value={year} onChange={(e) => setYear(e.target.value)}>
            {Object.keys(years).map((y) => (
              <option key={y}>{y}</option>
            ))}
          </SelectInput>
        </div>
      </header>
      <div style={{ height: 300 }}>
        <ResponsiveCalendar
          data={arr}
          // {...(contentWidth ? { width: contentWidth } : {})}
          from={years[year].start}
          to={years[year].end}
          emptyColor={EMPTY_COLOR}
          colors={ACTIVITY_COLORS}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          // yearSpacing={40}
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
    </ContentSection>
  );
}
