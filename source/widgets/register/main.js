define({
  type: 'Hull',

  templates: ['main', 'selected'],

  refreshEvents: ['model.hull.me.change'],

  initialize: function() {
    this.sandbox.on('repository.select', _.bind(this.onRepositorySelect, this));
  },

  beforeRender: function(data) {
    data.repository = this.repository;
  },

  onRepositorySelect: function(entity) {
    this.repository = entity.extra.repository;
    this.render('selected');
  }
});
