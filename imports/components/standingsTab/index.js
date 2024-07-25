import { Template } from 'meteor/templating';
import { getSelectedTeam, getTeamPoint, setTeamPoint } from '/lib/datas';
import { get } from 'jquery';

// componentStandingsTab template'i için onCreated metodu
Template.componentStandingsTab.onCreated(function () {
  this.teams = new ReactiveVar([]);

  // Seçilen takımı ve lig verisini takip et
  this.autorun(() => {
    const selectedTeam = getSelectedTeam();
    Meteor.call('fetch.leagueDataPoint', selectedTeam, (err, res) => {
      if (err) {
        console.error('Error fetching league data:', err);
      } else {
        // Fikstür tabını güncelle
        setTeamPoint(res);
      }
    });
  });
});

Template.componentStandingsTab.helpers({
  teams() {
    return getTeamPoint();
  },
  rankClass(index, length) {
    // Bu, sıralama sınıfını belirler. Örneğin, ilk üç için farklı renkler.
    if (index < 3) return 'top-three';
    if (index === length - 1) return 'bottom-one';
    return '';
  },
});