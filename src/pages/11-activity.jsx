import React from "react";
import { Redirect } from "react-router-dom";
import { ResponsiveCalendar } from "@nivo/calendar";
import { TRANSFORMED_KEYS } from "../constants";
import { AppLayout } from "../layouts/app-layout";
import { useProtectedPage } from "../hooks/use-protected-page";
import { SelectInput } from "../components/select-input";
import { Button } from "../components/button";
import { HorizontalRule } from "../components/horizontal-rule";

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
  title: "Activity",
  sidebar: "Activity",
  component: Page,
};

export function Page() {
  const { nope, goto, transformed } = useProtectedPage();
  if (nope) return <Redirect to={goto} />;
  return (
    <Protected
      data={transformed}
      title={meta.title}
      previousRoute="/totals"
      nextRoute={null}
    />
  );
}

function Protected({ data, title, previousRoute, nextRoute }) {
  const { years, entries } = data[TRANSFORMED_KEYS.ActivityCalendar];
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
    <AppLayout
      title={title}
      nextRoute={nextRoute}
      previousRoute={previousRoute}
    >
      <ActivityCalendarSection years={years} entries={entries} />
      <HorizontalRule />
      <AppLayout.Content>
        <nav className="d-flex flx-a-c flx-j-sb">
          <Button to="/" appearance="ghost">
            <>Previous</>
            <span className="d-none lg:d-inline">: Start over</span>
          </Button>
          <Button appearance="secondary" to="/">
            <>Next</>
            <span className="d-none lg:d-inline">: Instructors</span>
          </Button>
        </nav>
      </AppLayout.Content>
    </AppLayout>
  );
}

function ActivityCalendarSection({ years, entries }) {
  const [last] = Object.keys(years).slice(-1);
  const [year, setYear] = React.useState(last);
  const arr = Object.values(entries[year]);
  const [wpw, wpy] = [3, 214];
  return (
    <AppLayout.Content>
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
    </AppLayout.Content>
  );
}
