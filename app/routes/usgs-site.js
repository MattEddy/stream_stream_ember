import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('usgs-site', params.usgs_site_id);
  }
});
