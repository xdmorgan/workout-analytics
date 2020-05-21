import { meta as welcome } from "./00-welcome";
import { meta as styleguide } from "./00-styleguide";
import { meta as totals } from "./10-totals";
import { meta as activity } from "./11-activity";
import { meta as instructors } from "./12-instructors";
import { meta as outputs } from "./13-outputs";

export default {
  // anyone
  [welcome.route]: welcome,
  [styleguide.route]: styleguide,
  // protected
  [totals.route]: totals,
  [activity.route]: activity,
  [instructors.route]: instructors,
  [outputs.route]: outputs,
};
