define({
  type: 'Hull',

  templates: ['main'],

  datasources: {
    repositories: function() {
      var params = this.sorting ? { order_by: this.sorting } : {};
      return this.api('app/entities', params);
    }
  },

  initialize: function() {
    this.sandbox.on('sort', _.bind(function(field, direction) {
      this.sorting = field + ' ' + direction;
      this.render();
    }, this));
  }
});
