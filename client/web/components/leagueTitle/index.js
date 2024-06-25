import { ReactiveVar } from "meteor/reactive-var";
import { Template } from "meteor/templating";
import "./index.html";
import "./styles.css";

Template.componentLeagueTitle.onCreated(function () {
  this.teams = new ReactiveVar([
    {
      rank: "1",
      lose: "0",
      win: "4",
      play: "4",
      point: "12",
      team: "Kasımpaşa",
    },
    {
      rank: "2",
      lose: "0",
      win: "3",
      play: "4",
      point: "9",
      team: "Galatasaray",
    },
    {
      rank: "3",
      lose: "0",
      win: "3",
      play: "4",
      point: "9",
      team: "M.Başakşehir",
    },
    {
      rank: "4",
      lose: "2",
      win: "2",
      play: "4",
      point: "8",
      team: "Kayserispor",
    },
    {
      rank: "5",
      lose: "2",
      win: "2",
      play: "4",
      point: "8",
      team: "Atiker Konyaspor",
    },
  ]);
});

Template.componentLeagueTitle.helpers({
  teams: function () {
    return Template.instance().teams.get();
  },
  rankClass(index, TotalTeams) {
    if (index < 3) {
      return "top-three";
    } else if (index >= TotalTeams - 3) {
      return "bottom-three";
    }
    return "";
  },
});
