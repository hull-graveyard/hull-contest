define({
  type: 'Hull',

  templates: ['main'],

  actions: {
    sort: function(e, options) {
      var data = options.data;
      this.sandbox.emit('sort', data.field, data.direction || 'desc');
    }
  }
});
