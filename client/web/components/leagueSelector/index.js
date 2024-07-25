import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import "./index.html";

Template.componentLeagueSelector.onCreated(function () {
  this.leagues = new ReactiveVar([]);
  this.selectedLeagueName = new ReactiveVar("");
  this.topScorers = new ReactiveVar([]);

  Meteor.call("fetch.leagueList", (error, result) => {
    if (error) {
      console.error("Method call error:", error);
    } else {
      this.leagues.set(result);

      const superLig = result.find((league) => league.key === "super-lig");
      if (superLig) {
        this.selectedLeagueName.set(superLig.league);

        Meteor.call("fetch.leagueData", "super-lig", (error, result) => {
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
  leagues() {
    return Template.instance().leagues.get();
  },
  selectedLeagueName() {
    return Template.instance().selectedLeagueName.get();
  },
  topScorers() {
    return Template.instance().topScorers.get();
  },
});

Template.componentLeagueSelector.events({
  "click .dropdown-item": function (event, template) {
    event.preventDefault();
    const leagueKey = event.currentTarget.dataset.key;
    const leagueName = event.currentTarget.textContent.trim();

    template.selectedLeagueName.set(leagueName);

    Meteor.call("fetch.leagueData", leagueKey, (error, result) => {
      if (error) {
        console.error("Method call error:", error);
      } else {
        Session.set("selectedTeams", result);
      }
    });

    Meteor.call("fetch.topScorers", leagueKey, (error, result) => {
      if (error) {
        console.error("Method call error:", error);
      } else {
        template.topScorers.set(result);
      }
    });
  },
});
