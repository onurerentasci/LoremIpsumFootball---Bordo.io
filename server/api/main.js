import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

const fetchLeagueData = () => {
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
    if (response.data.success == false) {
      throw new Meteor.Error("Sunucu ile bağlantı sağlanamadı");
    } else {
      return response.data.result;
    }
  } catch (error) {
    throw new Meteor.Error("Sunucudan gelen istek başarısız: ", error.message);
  }
};

Meteor.startup(() => {
  Meteor.methods({
    getLeagueData: function () {
      return fetchLeagueData();
    },
  });
});
