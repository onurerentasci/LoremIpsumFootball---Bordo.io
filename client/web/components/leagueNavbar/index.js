import { Template } from "meteor/templating";
import "./index.html";
import "./styles.css";

import "../fixturesTab/index.html";
import "../fixturesTab/index.js";

import "../standingsTab/index.html";
import "../standingsTab/index.js";

import "../statisticsTab/index.html";
import "../statisticsTab/index.js";

Template.componentLeagueNavbar.onCreated(function () {
  this.activeTab = new ReactiveVar("standings");
});

Template.componentLeagueNavbar.helpers({
  isActiveTab(tabName) {
    return Template.instance().activeTab.get() === tabName;
  },
});

Template.componentLeagueNavbar.events({
  "click .nav-link"(event, instance) {
    event.preventDefault();
    const tabId = event.currentTarget.getAttribute("href").substring(1);
    instance.activeTab.set(tabId);
  },
});
