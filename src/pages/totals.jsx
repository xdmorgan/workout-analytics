import React from "react";
import { TRANSFORMED_KEYS } from "../transforms/types";
import { TotalPiechart } from "../components/total-piechart";
import { ListWithIcon } from "../components/list-with-icon";
import { ContentHeader } from "../components/content-header";
import { ContentSection } from "../components/content-section";
import { Pagination } from "../components/pagination";

export const meta = {
  route: "/totals",
  title: "Combined Totals",
  sidebar: "Combined Totals",
  component: Page,
  protected: true,
};

export function Page({ allWorkoutData, pageMetadata }) {
  const totals = allWorkoutData[TRANSFORMED_KEYS.TotalWorkouts];
  return (
    <>
      <ContentHeader
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      >
        {pageMetadata.title}
      </ContentHeader>
      <ContentSection>
        <TotalPiechart data={totals.numberOfWorkouts.pieChart}>
          <p className="type-h1-xxl my-2x">{totals.numberOfWorkouts.sum}</p>
          <h2 className="type-h2">Combined Workouts</h2>
          <p className="type-para my-0">
            <>Out of that, you completed workouts in </>
            {totals.numberOfWorkouts.pieChart.length}
            {totals.numberOfWorkouts.pieChart.length !== 1
              ? " different categories"
              : " category"}
          </p>
        </TotalPiechart>
      </ContentSection>
      <ContentSection>
        <TotalPiechart data={totals.timeInMinutes.pieChart}>
          <p className="type-h1-xxl my-2x">{totals.timeInMinutes.sum}</p>
          <h2 className="type-h2">Minutes Completed</h2>
          <p className="type-para my-0">That's the equivalent of:</p>
          <ListWithIcon>
            <ListWithIcon.Item icon={<>⏱</>}>
              {(([count, plural]) => `${count} hour${plural ? "s" : ""}`)(
                toHours(totals.timeInMinutes.sum)
              )}
            </ListWithIcon.Item>
            <ListWithIcon.Item icon={<>🏢</>}>
              {(([count, plural]) =>
                `${count} episode${plural ? "s" : ""} of The Office`)(
                toOfficeEpisodes(totals.timeInMinutes.sum)
              )}
            </ListWithIcon.Item>
            <ListWithIcon.Item icon={<>🚢</>}>
              {(([count, plural]) =>
                `${count} time${plural ? "s" : ""} watching Titanic`)(
                toTitanicMovies(totals.timeInMinutes.sum)
              )}
            </ListWithIcon.Item>
          </ListWithIcon>
        </TotalPiechart>
      </ContentSection>
      <ContentSection>
        <TotalPiechart data={totals.distanceInMiles.pieChart}>
          <p className="type-h1-xxl my-2x">{totals.distanceInMiles.sum}</p>
          <h2 className="type-h2">Miles Covered</h2>
          <p className="type-para my-0">That's the equivalent of:</p>
          <ListWithIcon>
            <ListWithIcon.Item icon={<>🏃‍♀️</>}>
              {(([count, plural]) => `${count} marathon${plural ? "s" : ""}`)(
                toMarathons(totals.distanceInMiles.sum)
              )}
            </ListWithIcon.Item>
            <ListWithIcon.Item icon={<>🏎</>}>
              {(([count, plural]) => `${count} lap${plural ? "s" : ""}`)(
                toNurburgrings(totals.distanceInMiles.sum)
              )}{" "}
              around the Nürburgring
            </ListWithIcon.Item>
            <ListWithIcon.Item icon={<>🚴‍♀️</>}>
              Approximately{" "}
              {(([count, plural]) =>
                `${count} Tour de France${plural ? "s" : ""}`)(
                toTourDeFrances(totals.distanceInMiles.sum)
              )}
            </ListWithIcon.Item>
          </ListWithIcon>
        </TotalPiechart>
      </ContentSection>
      <ContentSection>
        <TotalPiechart data={totals.caloriesBurned.pieChart}>
          <p className="type-h1-xxl my-2x">{totals.caloriesBurned.sum}</p>
          <h2 className="type-h2">Calories Burned</h2>
          <p className="type-para my-0">That's the equivalent of:</p>
          <ListWithIcon>
            <ListWithIcon.Item icon={<>🍪</>}>
              {(([count, plural]) => `${count} Oreo${plural ? "s" : ""}`)(
                toOreos(totals.caloriesBurned.sum)
              )}
            </ListWithIcon.Item>
            <ListWithIcon.Item icon={<>🍔</>}>
              {(([count, plural]) => `${count} Big Mac${plural ? "s" : ""}`)(
                toBigMacs(totals.caloriesBurned.sum)
              )}
            </ListWithIcon.Item>
            <ListWithIcon.Item icon={<>🍨</>}>
              {(([count, plural]) => `${count} Vermonster${plural ? "s" : ""}`)(
                toVermonsters(totals.caloriesBurned.sum)
              )}
            </ListWithIcon.Item>
          </ListWithIcon>
        </TotalPiechart>
      </ContentSection>
      <Pagination
        previousRoute={pageMetadata.pagination.previous}
        nextRoute={pageMetadata.pagination.next}
      />
    </>
  );
}

function toHours(minutes) {
  return comparison(minutes, 60);
}

function toOfficeEpisodes(minutes) {
  return comparison(minutes, 22);
}

function toTitanicMovies(minutes) {
  return comparison(minutes, 195);
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

function toVermonsters(calories) {
  return comparison(calories, 14000);
}

function comparison(to, base, floor = true) {
  let count = to / base;
  if (floor) count = Math.floor(count);
  return [count, count !== 1]; // count and pluralize boolean
}
