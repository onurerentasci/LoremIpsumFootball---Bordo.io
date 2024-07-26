import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import { getLeagueData } from "/lib/datas";

Template.componentFixturesTab.onCreated(function () {});

Template.componentFixturesTab.helpers({
  fixtures() {
    return getLeagueData();
  },
  abbrev(teamName) {
    return teamName.substring(0, 2).toUpperCase();
  },
  formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  },
});
