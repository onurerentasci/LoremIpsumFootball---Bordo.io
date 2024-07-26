import { ReactiveVar } from "meteor/reactive-var";

// Reactive variables
const leagueData = new ReactiveVar([]);
const selectedTeam = new ReactiveVar("");
const teamPoint = new ReactiveVar([]);
const topScores = new ReactiveVar([]);

// Setters
const setLeagueData = (leagueList) => {
  leagueData.set(leagueList);
};

const setSelectedTeam = (selectedLeague) => {
  selectedTeam.set(selectedLeague);
};

const setTeamPoint = (selectedStandings) => {
  teamPoint.set(selectedStandings);
};
const setTopScores = (selectedStandings) => {
  topScores.set(selectedStandings);
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
