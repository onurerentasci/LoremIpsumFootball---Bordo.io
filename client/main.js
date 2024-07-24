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

import { ReactiveVar } from "meteor/reactive-var";

const isLoading = new ReactiveVar(true);

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
});
