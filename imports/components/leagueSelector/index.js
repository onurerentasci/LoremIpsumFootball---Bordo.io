import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { setLeagueData, setSelectedTeam } from '/lib/datas';

Template.componentLeagueSelector.onCreated(function () {
  this.leagues = new ReactiveVar([]);
  this.selectedLeagueName = new ReactiveVar("Almanya Bundesliga");
  setSelectedTeam('almanya-bundesliga');

  // Ligi listelemek için Meteor metodunu çağır
  Meteor.call('fetch.leagueList', (err, res) => {
    if (err) {
      console.error('Error fetching league list:', err);
    } else {
      this.leagues.set(res);
    }
  });
});

Template.componentLeagueSelector.helpers({
  leagues() {
    return Template.instance().leagues.get();
  },
  selectedLeagueName() {
    return Template.instance().selectedLeagueName.get();
  },
});

Template.componentLeagueSelector.events({
  'click .dropdown-item'(event, instance) {
    event.preventDefault();
    const leagueKey = event.currentTarget.dataset.key;
    const leagueName = event.currentTarget.textContent;

    // Seçili ligi güncelle
    instance.selectedLeagueName.set(leagueName);

    // Seçilen ligi Session değişkenine kaydet
    setSelectedTeam(leagueKey);

    // Burada fetchLeagueData veya fetchGoalKings gibi diğer işlemleri başlatabilirsiniz
    Meteor.call('fetch.leagueData', leagueKey, (err, res) => {
      if (err) {
        console.error('Error fetching league data:', err);
      } else {
        // Fikstür tabını güncelle
        setLeagueData(res);
      }
    });
  },
});