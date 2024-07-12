import { Template } from "meteor/templating";
import "./index.html";
import "./styles.css";

Template.componentLeagueTitle.helpers({
  teams: function () {
    return Session.get("selectedTeams") || [];
  },
  rankClass(index, TotalTeams) {
    if (index < 3) {
      return "top-three";
    } else if (index >= TotalTeams - 3) {
      return "bottom-three";
    }
    return "";
  },
});

Template.TabSelecter.events({
  "click nav-link": function (e) {
    $("nav-link > .active").next("li").find("a").tab("show");
  },
});
