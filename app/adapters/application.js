import DS from 'ember-data';
import Ember from 'ember';
export default DS.RESTAdapter.extend({
  namespace: 'api',
  coalesceFindRequests: true,
  pathForType: function(type) {
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});

