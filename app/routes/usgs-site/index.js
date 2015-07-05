import Ember from 'ember';

export default Ember.Route.extend({
  // beforeModel: function() {
  //   return this.csrf.fetchToken();
  // },
  model: function(params) {
    return this.modelFor('usgs-site').get('measurements');
  }
});
