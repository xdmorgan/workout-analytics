import { meta as welcome } from "./welcome";
import { meta as totals } from "./totals";
import { meta as activity } from "./activity";
import { meta as instructors } from "./instructors";
import { meta as outputs } from "./outputs";
import { meta as averageMetrics } from "./average-metrics";
import { meta as styleguide } from "./styleguide";
import { meta as styleguideButtons } from "./styleguide-buttons";

const appViews = [totals, activity, instructors, outputs, averageMetrics];

const routes = {
  // anyone
  [welcome.route]: welcome,
  // protected
  ...appViews.reduce(
    (obj, view, idx) => ({
      ...obj,
      [view.route]: {
        ...view,
        pagination: {
          // previous app view or back home
          previous: appViews[idx - 1] ? appViews[idx - 1].route : "/",
          // next app view or null (to disable next button). Later, share page
          next: appViews[idx + 1] ? appViews[idx + 1].route : null,
        },
      },
    }),
    {}
  ),
  // supporting pages
  [styleguide.route]: styleguide,
  [styleguideButtons.route]: styleguideButtons,
};

export default routes;
