import Ember from "ember";

export default Ember.Component.extend({
  tagName: 'svg',
  attributeBindings: 'width height margin'.w()
});
