import { HTTP } from "meteor/http";

export const fetchLeagueList = () => {
  const url = "https://api.collectapi.com/football/leaguesList";
  const options = {
    headers: {
      authorization: Meteor.settings.private.apiKey,
      "content-type": "application/json",
    },
  };

  try {
    const response = HTTP.call("GET", url, options);
    return response.data.result.slice(0, 11);
  } catch (error) {
    throw new Meteor.Error("API request failed", error.message);
  }
};

export const fetchLeagueData = (leagueKey) => {
  const url = `https://api.collectapi.com/football/league?data.league=${leagueKey}`;
  const options = {
    headers: {
      authorization: Meteor.settings.private.apiKey,
      "content-type": "application/json",
    },
  };

  try {
    const response = HTTP.call("GET", url, options);
    return response.data.result;
  } catch (error) {
    throw new Meteor.Error("API request failed", error.message);
  }
};

export const fetchTopScorer = (leagueKey) => {
  const url = `https://api.collectapi.com/football/goalKings?data.league=${leagueKey}`;
  const options = {
    headers: {
      authorization: Meteor.settings.private.apiKey,
      "content-type": "application/json",
    },
  };

  try {
    const response = HTTP.call("GET", url, options);
    return response.data.result;
  } catch (error) {
    throw new Meteor.Error("API request failed", error.message);
  }
};
