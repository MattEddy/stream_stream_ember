import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('component-library')
  this.resource('usgs-sites', { path: 'usgs-sites' }, function() {
    this.route('search')
  })

  this.resource('usgs-site', { path: '/usgs-site/:usgs_site_id'}, function() {

  })
});
