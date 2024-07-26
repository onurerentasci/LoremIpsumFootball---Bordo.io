import { Template } from "meteor/templating";
import { getSelectedTeam, getTeamPoint, setTeamPoint } from "/lib/datas";
import { get } from "jquery";

Template.componentStandingsTab.onCreated(function () {
  this.teams = new ReactiveVar([]);

  this.autorun(() => {
    const selectedTeam = getSelectedTeam();
    Meteor.call("fetch.leagueDataPoint", selectedTeam, (err, res) => {
      if (err) {
        console.error("Error fetching league data:", err);
      } else {
        setTeamPoint(res);
      }
    });
  });
});

Template.componentStandingsTab.helpers({
  teams() {
    return getTeamPoint();
  },
  rankClass(index, length) {
    if (index < 3) return "top-three";
    if (index === length - 1) return "bottom-one";
    return "";
  },
});
