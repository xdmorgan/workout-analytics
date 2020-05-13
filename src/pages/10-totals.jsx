import React from "react";
import { AppLayout } from "../layouts/app-layout";
import { ProtectedPage } from "../components/protected-page";
import { TRANSFORMED_KEYS } from "../constants";
import { Pagination } from "../components/pagination";
import { TotalPiechart } from "../components/total-piechart";

export const meta = {
  route: "/totals",
  title: "Combined Totals",
  sidebar: "Totals",
  component: Page,
  pagination: {
    previous: null,
    next: "/activity",
  },
};

export function Page() {
  return <ProtectedPage component={PageWithData} />;
}

function PageWithData({ allWorkoutData, pageMetadata }) {
  const totals = allWorkoutData[TRANSFORMED_KEYS.TotalWorkouts];
  console.log(totals, pageMetadata);
  return (
    <AppLayout
      title={pageMetadata.title}
      previousRoute={pageMetadata.pagination.previous}
      nextRoute={pageMetadata.pagination.next}
    >
      <AppLayout.Content>
        <TotalPiechart data={totals.numberOfWorkouts.pieChart}>
          <h2 className="type-h2">Number of Workouts</h2>
          <p className="type-h1-xxl my-2x">{totals.numberOfWorkouts.sum}</p>
          <p className="type-para my-0">
            <>Out of that combined total, you completed workouts in </>
            {totals.numberOfWorkouts.pieChart.length}
            {totals.numberOfWorkouts.pieChart.length !== 1
              ? " different categories"
              : " category"}
          </p>
        </TotalPiechart>
      </AppLayout.Content>
      <AppLayout.Content>
        <TotalPiechart data={totals.timeInMinutes.pieChart}>
          <h2 className="type-h2">Time in Minutes</h2>
          <p className="type-h1-xxl my-2x">{totals.timeInMinutes.sum}</p>
          <p className="type-para my-0">
            <>Out of that combined total, you completed workouts in </>
            {totals.timeInMinutes.pieChart.length}
            {totals.timeInMinutes.pieChart.length !== 1
              ? " different categories"
              : " category"}
            <div className="wysiwyg">
              <ul>
                <li>
                  That's over{" "}
                  {(([count, plural]) => `${count} hour${plural ? "s" : ""}!`)(
                    toHours(totals.timeInMinutes.sum)
                  )}
                </li>
              </ul>
            </div>
          </p>
        </TotalPiechart>
      </AppLayout.Content>
      <AppLayout.Content>
        <TotalPiechart data={totals.distanceInMiles.pieChart}>
          <h2 className="type-h2">Distance in Miles</h2>
          <p className="type-h1-xxl my-2x">{totals.distanceInMiles.sum}</p>
          <p className="type-para my-0">
            <>Out of that combined total, you completed workouts in </>
            {totals.distanceInMiles.pieChart.length}
            {totals.distanceInMiles.pieChart.length !== 1
              ? " different categories"
              : " category"}
          </p>
          <div className="wysiwyg">
            <ul>
              <li>
                That's over{" "}
                {(([count, plural]) =>
                  `${count} marathon${plural ? "s" : ""}!`)(
                  toMarathons(totals.distanceInMiles.sum)
                )}
              </li>
              <li>
                {(([count, plural]) => `${count} lap${plural ? "s" : ""}`)(
                  toNurburgrings(totals.distanceInMiles.sum)
                )}{" "}
                around the Nürburgring
              </li>
              <li>
                Approximately{" "}
                {(([count, plural]) =>
                  `${count} Tour de France${plural ? "s" : ""}`)(
                  toTourDeFrances(totals.distanceInMiles.sum)
                )}
              </li>
            </ul>
          </div>
        </TotalPiechart>
      </AppLayout.Content>
      <AppLayout.Content>
        <TotalPiechart data={totals.caloriesBurned.pieChart}>
          <h2 className="type-h2">Calories Burned</h2>
          <p className="type-h1-xxl my-2x">{totals.caloriesBurned.sum}</p>
          <p className="type-para my-0">
            <>Out of that combined total, you completed workouts in </>
            {totals.caloriesBurned.pieChart.length}
            {totals.caloriesBurned.pieChart.length !== 1
              ? " different categories"
              : " category"}
          </p>
          <div className="wysiwyg">
            <ul>
              <li>
                That's over{" "}
                {(([count, plural]) => `${count} Oreo${plural ? "s" : ""}!`)(
                  toOreos(totals.caloriesBurned.sum)
                )}
              </li>
              <li>
                That's over{" "}
                {(([count, plural]) => `${count} Big Mac${plural ? "s" : ""}!`)(
                  toBigMacs(totals.caloriesBurned.sum)
                )}
              </li>
            </ul>
          </div>
        </TotalPiechart>
      </AppLayout.Content>
      <AppLayout.Content divider="before">
        <Pagination
          previousRoute={pageMetadata.pagination.previous}
          nextRoute={pageMetadata.pagination.next}
          nextLabel="Activity"
        />
      </AppLayout.Content>
    </AppLayout>
  );
}

function toHours(minutes) {
  return comparison(minutes, 60);
}

function toNurburgrings(miles) {
  return comparison(miles, 16.12);
}

function toMarathons(miles) {
  return comparison(miles, 26.2);
}

function toTourDeFrances(miles) {
  return comparison(miles, 2200, false);
}

function toOreos(calories) {
  return comparison(calories, 53);
}

function toBigMacs(calories) {
  return comparison(calories, 563);
}

function comparison(to, base, floor = true) {
  let count = to / base;
  if (floor) count = Math.floor(count);
  return [count, count !== 1]; // count and pluralize boolean
}
