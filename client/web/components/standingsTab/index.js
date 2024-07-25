import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import "./index.html";
import "./styles.css";

Template.componentStandingsTab.helpers({
  teams() {
    return Session.get("selectedTeams") || [];
  },
  rankClass(index, totalTeams) {
    if (index < 3) {
      return "top-three";
    } else if (index >= totalTeams - 3) {
      return "bottom-three";
    }
    return "";
  },
});
