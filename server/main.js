import { Meteor } from "meteor/meteor";
import {
  fetchLeagueData,
  fetchLeagueList,
  fetchTopScorer,
} from "../lib/apiUtils";

Meteor.startup(() => {
  Meteor.methods({
    getLeagueList: function () {
      return fetchLeagueList();
    },
    getLeagueData: function (leagueKey) {
      return fetchLeagueData(leagueKey);
    },
    getTopScorer: function (leagueKey) {
      return fetchTopScorer(leagueKey);
    },
  });
});
