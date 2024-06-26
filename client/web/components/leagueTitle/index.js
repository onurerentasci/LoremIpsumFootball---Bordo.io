import { ReactiveVar } from "meteor/reactive-var";
import { Template } from "meteor/templating";
import "./index.html";
import "./styles.css";

Template.componentLeagueTitle.onCreated(function () {
  this.teams = new ReactiveVar([]);

  Meteor.call("getLeagueData", (error, result) => {
    if (error) {
      console.error("Method call error: ", error);
    } else {
      this.teams.set(result);
    }
  });
});

Template.componentLeagueTitle.helpers({
  teams: function () {
    return Template.instance().teams.get();
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
