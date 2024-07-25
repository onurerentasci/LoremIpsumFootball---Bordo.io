import { Template } from "meteor/templating";
import {
  getSelectedTeam,
  getTeamPoint,
  getTopScores,
  setTeamPoint,
  setTopScores,
} from "/lib/datas";
import { get } from "jquery";

// componentStandingsTab template'i için onCreated metodu
Template.componentStatisticsTab.onCreated(function () {
  this.teams = new ReactiveVar([]);

  // Seçilen takımı ve lig verisini takip et
  this.autorun(() => {
    const selectedTeam = getSelectedTeam();
    Meteor.call("fetch.topScorers", selectedTeam, (err, res) => {
      if (err) {
        console.error("Error fetching league data:", err);
      } else {
        console.log("League top scores:", res);
        // Fikstür tabını güncelle
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
