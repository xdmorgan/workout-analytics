import { meta as welcome } from "./00-welcome";
import { meta as styleguide } from "./00-styleguide";
import { meta as activityCalendar } from "./10-activity-calendar";

export default {
  // anyone
  [welcome.title]: welcome,
  [styleguide.title]: styleguide,
  // protected
  [activityCalendar.title]: activityCalendar,
};
