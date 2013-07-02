define({
  type: 'Hull',

  templates: ['main'],

  events: {
    'click .repository': 'onRepositoryClick'
  },

  refreshEvents: ['model.hull.me.change'],

  datasources: {
    repositories: function() {
      var identities = this.loggedIn();
      if (identities && identities.github){
        return this.api({
          provider: 'github',
          path: '/users/' + identities.github.login + '/repos'
        });
      } else {
        return [];
      }
    }
  },

  onRepositoryClick: function(e) {
    var repository = this.data.repositories[$(e.currentTarget).data('index')];
    var rid = this.sandbox.util.entity.encode(repository.full_name);

    this.api.get(rid).done(_.bind(function(res) {
      console.log(res);
      this.sandbox.emit('repository.select', res);
    }, this));
  }
});
