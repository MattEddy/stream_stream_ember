import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication){
    var authorizationCode = authentication.authorizationCode;
    return new Ember.RSVP.Promise(function(resolve, reject){
      Ember.$.ajax({
        url: 'api/session',
        data: { 'facebook-auth-code': authorizationCode },
        dataType: 'json',
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function(user){
      window.localStorage.setItem('token', user.token);
      window.localStorage.setItem('name',  user.name);
      return {
        currentUser: user
      };
    });
  },
  fetch: function() {
    return new Ember.RSVP.Promise(function(resolve, reject){
      var accessToken = window.localStorage.getItem('token');
      var userName    = window.localStorage.getItem('name');
      return resolve({
        token: accessToken,
        userName: userName
      });
    }).then(function(user){
      return {
        userName:    user.userName,
        accessToken: user.token
      };
    });
  },
  close: function() {
  }
});
