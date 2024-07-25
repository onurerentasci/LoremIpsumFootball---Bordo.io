import "./main.html";
import "./main.css";

import "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import "../client/web/components/leagueTitle/index.html";
import "../client/web/components/leagueTitle/index.js";
import "../client/web/components/leagueTitle/styles.css";

import "../client/web/components/leagueSelector/index.html";
import "../client/web/components/leagueSelector/index.js";

import "../client/web/components/loading/index.html";
import "../client/web/components/loading/styles.css";

import "../client/web/components/leagueNavbar/index.html";
import "../client/web/components/leagueNavbar/index.js";
import "../client/web/components/leagueNavbar/styles.css";

import "../client/web/components/fixturesTab/index.html";
import "../client/web/components/fixturesTab/index.js";
import "../client/web/components/fixturesTab/styles.css";

import "../client/web/components/standingsTab/index.html";
import "../client/web/components/standingsTab/index.js";
import "../client/web/components/standingsTab/styles.css";

import "../client/web/components/statisticsTab/index.html";
import "../client/web/components/statisticsTab/index.js";
import "../client/web/components/statisticsTab/styles.css";

import { ReactiveVar } from "meteor/reactive-var";

const isLoading = new ReactiveVar(true);
const goalKings = new ReactiveVar([]);

Template.body.onCreated(function () {
  Meteor.setTimeout(() => {
    isLoading.set(false);
  }, 3000);

  this.autorun(() => {
    Meteor.call("getLeagueList", (error, result) => {
      if (error) {
        console.error("Method call error:", error);
      } else {
        const superLig = result.find((league) => league.key === "super-lig");
        if (superLig) {
          Meteor.call("getLeagueData", "super-lig", (error, result) => {
            if (error) {
              console.error("Method call error:", error);
            } else {
              Session.set("selectedTeams", result);
            }
          });

          Meteor.call("getTopScorers", "super-lig", (error, result) => {
            if (error) {
              console.error("Method call error:", error);
            } else {
              goalKings.set(result);
            }
          });
        }
      }
    });
  });
});

Template.body.helpers({
  selectedTeams: function () {
    return Session.get("selectedTeams");
  },
  isLoading: function () {
    return isLoading.get();
  },
  goalKings: function () {
    return goalKings.get();
  },
});
