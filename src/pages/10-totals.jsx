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
        <TotalPiechart data={totals.numberOfWorkoutsByDisciplinePieData}>
          <h2 className="type-h2">Number of Workouts</h2>
          <p className="type-h1-xxl my-2x">{totals.numberOfWorkouts}</p>
          <p className="type-para my-0">
            <>Out of that combined total, you completed workouts in </>
            {totals.numberOfWorkoutsByDisciplinePieData.length}
            {totals.numberOfWorkoutsByDisciplinePieData.length !== 1
              ? " different categories"
              : " category"}
          </p>
        </TotalPiechart>
      </AppLayout.Content>
      <AppLayout.Content>
        <div className="child-my-0">
          <h2 className="type-h2">Time in Minutes</h2>
          <p className="type-h1-xxl mt-2x">{totals.timeInMinutes}</p>
        </div>
        <div className="wysiwyg">
          <ul>
            <li>
              That's over{" "}
              {(([count, plural]) => `${count} hour${plural ? "s" : ""}!`)(
                toHours(totals.timeInMinutes)
              )}
            </li>
          </ul>
        </div>
      </AppLayout.Content>
      <AppLayout.Content>
        <div className="child-my-0">
          <h2 className="type-h2">Distance in Miles</h2>
          <p className="type-h1-xxl mt-2x">{totals.distanceInMiles}</p>
        </div>
        <div className="wysiwyg">
          <ul>
            <li>
              That's over{" "}
              {(([count, plural]) => `${count} marathon${plural ? "s" : ""}!`)(
                toMarathons(totals.distanceInMiles)
              )}
            </li>
            <li>
              {(([count, plural]) => `${count} lap${plural ? "s" : ""}`)(
                toNurburgrings(totals.distanceInMiles)
              )}{" "}
              around the Nürburgring
            </li>
            <li>
              Approximately{" "}
              {(([count, plural]) =>
                `${count} Tour de France${plural ? "s" : ""}`)(
                toTourDeFrances(totals.distanceInMiles)
              )}
            </li>
          </ul>
        </div>
      </AppLayout.Content>
      <AppLayout.Content>
        <div className="child-my-0">
          <h2 className="type-h2">Calories Burned</h2>
          <p className="type-h1-xxl mt-2x">{totals.caloriesBurned}</p>
        </div>
        <div className="wysiwyg">
          <ul>
            <li>
              That's over{" "}
              {(([count, plural]) => `${count} Oreo${plural ? "s" : ""}!`)(
                toOreos(totals.caloriesBurned)
              )}
            </li>
            <li>
              That's over{" "}
              {(([count, plural]) => `${count} Big Mac${plural ? "s" : ""}!`)(
                toBigMacs(totals.caloriesBurned)
              )}
            </li>
          </ul>
        </div>
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
