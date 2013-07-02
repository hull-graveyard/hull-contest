define({
  type: 'Hull',

  templates: [
    'root',
    'register',
    'repository'
  ],

  initialize: function() {
    var self = this;

    var Router = require('backbone').Router.extend({
      routes: {
        '': 'showRoot',
        'register': 'showRegister',
        ':user/:name': 'showRepository'
      },

      showRoot: function() {
        self.render('root');
      },

      showRegister: function() {
        self.render('register');
      },

      showRepository: function(user, name) {
        self.render('repository', { repository: user + '/' + name });
      }
    });

    this.router = new Router();

    Backbone.history.start();
  }
});
