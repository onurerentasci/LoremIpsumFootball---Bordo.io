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

Template.body.helpers({
    selectedTeams: function () {
      return Session.get("selectedTeams");
      
    },
  });