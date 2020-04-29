import { ResponsiveCalendar } from "@nivo/calendar";
import { TRANSFORMED_KEYS } from "../src/transforms";

export default function ActivityCalendarPage({ data }) {
  console.log(data);
  const { min, max, entries } = data[TRANSFORMED_KEYS.ActivityCalendar];
  return (
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
  );
}
