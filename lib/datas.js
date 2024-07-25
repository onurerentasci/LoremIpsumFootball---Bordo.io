import { ReactiveVar } from "meteor/reactive-var";

// Reactive variables
const leagueData = new ReactiveVar([]);
const selectedTeam = new ReactiveVar("");
const teamPoint = new ReactiveVar([]);
const topScores = new ReactiveVar([]);

// Setters
const setLeagueData = (newStates) => {
  leagueData.set(newStates);
};

const setSelectedTeam = (newCities) => {
  selectedTeam.set(newCities);
};

const setTeamPoint = (newStateCodes) => {
  teamPoint.set(newStateCodes);
};
const setTopScores = (newStateCodes) => {
  topScores.set(newStateCodes);
};

const getLeagueData = () => {
  return leagueData.get();
};

const getSelectedTeam = () => {
  return selectedTeam.get();
};

const getTeamPoint = () => {
  return teamPoint.get();
};
const getTopScores = () => {
  return topScores.get();
};

export {
  setLeagueData,
  getLeagueData,
  setSelectedTeam,
  getSelectedTeam,
  setTeamPoint,
  getTeamPoint,
  setTopScores,
  getTopScores,
};
