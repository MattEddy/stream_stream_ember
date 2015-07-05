import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  usgsSite: DS.belongsTo('usgs-site'),
  time: attr('string'),
  site_id: attr('string'),
  flow_rate: attr('string'),
  stream_height: attr('string')
});
