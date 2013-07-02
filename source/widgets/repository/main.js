define({
  type: 'Hull',

  templates: ['main'],

  datasources: {
    repository: function() {
      return this.api({
        provider: 'github',
        path: '/repos/' + this.options.repository
      });
    }
  },

  beforeRender: function(data) {
    data.name = this.options.repository;
    console.log('DATA', data);
  }
});
