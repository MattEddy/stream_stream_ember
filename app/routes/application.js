import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('session').fetch('mad-march-runs-api').catch(function(e) {
      // no op is fine here
    });
  },
  actions: {
    signInViaFacebook(){
      // The provider name is passed to `open`
      this.get('session').open('facebook-oauth2').then(function(){
      }, function(error){});
    },
    logout() {
      this.get('session').close()
    },
    dubCheck() {
      debugger;
    }
  }
});
