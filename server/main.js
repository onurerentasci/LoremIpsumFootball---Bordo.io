import { Meteor } from "meteor/meteor";
import { fetchLeagueData, fetchLeagueList } from "../lib/apiUtils";

Meteor.startup(() => {
  Meteor.methods({
    getLeagueList: function () {
      return fetchLeagueList();
    },
    getLeagueData: function (leagueKey) {
      return fetchLeagueData(leagueKey);
    },
  });
});
