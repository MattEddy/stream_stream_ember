import Ember from 'ember';
import Storage from '../utils/storage';

export default Ember.Object.extend({
  storage: new Storage(),
  open: function(authentication) {
    var storage = this.get('storage');
    var authorizationCode = authentication.authorizationCode;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url: 'api/session',
        data: { 'facebook-auth-code': authorizationCode },
        dataType: 'json'
      }).then(function(user){
        if (Ember.isEmpty(user.token)) {
          return reject();
        }
        storage.store({
          token: user.token,
          name: user.name
        });
        return resolve({
          currentUser: user
        });
      });
    });
  },
  fetch() {
    var storage = this.get('storage');

    return new Ember.RSVP.Promise(function(resolve, reject) {
      if(storage.exists('token')) {
        return resolve(storage.fetch('token', 'name'));
      } else {
        return reject();
      }
    });
  },
  close() {
    var storage = this.get('storage');

    storage.nullItems('token', 'name');
  }
});
