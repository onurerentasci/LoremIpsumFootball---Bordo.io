import { Template } from "meteor/templating";
import {
  getSelectedTeam,
  getTeamPoint,
  getTopScores,
  setTeamPoint,
  setTopScores,
} from "/lib/datas";
import { get } from "jquery";

Template.componentStatisticsTab.onCreated(function () {
  this.teams = new ReactiveVar([]);

  this.autorun(() => {
    const selectedTeam = getSelectedTeam();
    Meteor.call("fetch.topScorers", selectedTeam, (err, res) => {
      if (err) {
        console.error("Error fetching league data:", err);
      } else {
        console.log("League top scores:", res);
        setTopScores(res);
      }
    });
  });
});

Template.componentStatisticsTab.helpers({
  GetTopScorers() {
    return getTopScores();
  },
  indexPlusOne(index) {
    return index + 1;
  },
});
