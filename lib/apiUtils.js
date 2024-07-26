import { Meteor } from "meteor/meteor";
import { fetch, Headers } from "meteor/fetch";

const API_KEY = Meteor.settings.private.apiKey;
const BASE_URL = Meteor.settings.public.baseUrl;

const fetchFromApi = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: API_KEY,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    throw new Meteor.Error(`Fetch failed: ${error.message}`);
  }
};

//////////////////////////////////////////////////////////////

export const fetchLeagueList = async () => {
  const result = await fetchFromApi("leaguesList");
  return result.slice(0, 11);
};

export const fetchLeagueData = async (leagueKey) => {
  return await fetchFromApi(`results?data.league=${leagueKey}`);
};

export const fetchLeagueDataPoint = async (leagueKey) => {
  return await fetchFromApi(`league?data.league=${leagueKey}`);
};

export const fetchGoalKings = async (leagueKey) => {
  const result = await fetchFromApi(`goalKings?data.league=${leagueKey}`);
  return result;
};
