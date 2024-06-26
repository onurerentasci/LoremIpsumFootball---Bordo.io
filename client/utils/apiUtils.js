import { HTTP } from "meteor/http";

export const fetchLeagueData = () => {
  const url =
    "https://api.collectapi.com/football/league?data.league=super-lig";
  const options = {
    headers: {
      authorization: "apikey 0f1ih2fhgOmPn77aPy0Bnf:7eADT06zqqaU2rXiaZdKGm",
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
