import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import "./index.html";

Template.componentLeagueSelector.onCreated(function () {
  this.leagues = new ReactiveVar([]);
  this.selectedLeagueName = new ReactiveVar("");

  Meteor.call("getLeagueList", (error, result) => {
    if (error) {
      console.error("Method call error:", error);
    } else {
      this.leagues.set(result);

      const superLig = result.find((league) => league.key === "super-lig");
      if (superLig) {
        this.selectedLeagueName.set(superLig.league);

        Meteor.call("getLeagueData", "super-lig", (error, result) => {
          if (error) {
            console.error("Method call error:", error);
          } else {
            Session.set("selectedTeams", result);
          }
        });
      }
    }
  });
});

Template.componentLeagueSelector.helpers({
  leagues: function () {
    return Template.instance().leagues.get();
  },
  selectedLeagueName: function () {
    return Template.instance().selectedLeagueName.get();
  },
});

Template.componentLeagueSelector.events({
  "click .dropdown-item": function (event, template) {
    event.preventDefault();
    const leagueKey = event.currentTarget.dataset.key;
    const leagueName = event.currentTarget.textContent.trim();

    template.selectedLeagueName.set(leagueName);

    Meteor.call("getLeagueData", leagueKey, (error, result) => {
      if (error) {
        console.error("Method call error:", error);
      } else {
        Session.set("selectedTeams", result);
      }
    });
  },
});
