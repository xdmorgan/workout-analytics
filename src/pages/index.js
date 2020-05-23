import { meta as welcome } from "./00-welcome";
import { meta as totals } from "./10-totals";
import { meta as activity } from "./11-activity";
import { meta as instructors } from "./12-instructors";
import { meta as outputs } from "./13-outputs";
import { meta as styleguide } from "./100-styleguide";
import { meta as styleguideButtons } from "./101-styleguide-buttons";

export default {
  // anyone
  [welcome.route]: welcome,
  // protected
  [totals.route]: totals,
  [activity.route]: activity,
  [instructors.route]: instructors,
  [outputs.route]: outputs,
  // supporting pages
  [styleguide.route]: styleguide,
  [styleguideButtons.route]: styleguideButtons,
};
