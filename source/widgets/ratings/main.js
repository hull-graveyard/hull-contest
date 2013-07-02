define({
  type: 'Hull',

  templates: ['main'],

  refreshEvents: ['model.hull.me.change'],

  options: { max: 5 },

  datasources: {
    average: function() {
      return this.api(this.id).pipe(_.bind(function(object) {
        var average = object.stats.reviews ? object.stats.reviews.avg : 0;
        return this.normalizeRating(average);
      }, this));
    }
  },

  beforeRender: function(data) {
    var ratings = [];
    for (var i = 0; i < this.options.max; i += 1) {
      ratings[i] = i + 1;
    }
    data.ratings = ratings;
  },

  rate: function(rating) {
    rating = this.normalizeRating(rating);
    this.api.post(this.id + '/reviews', { rating: rating }).done(_.bind(function(res) {
      this.sandbox.emit('rating.complete', res);
      this.render();
    }, this));
  },

  normalizeRating: function(rating) {
    rating = parseInt(rating, 10);

    if (isNaN(rating) || rating < 0) {
      return 0;
    } else if (rating > this.options.max) {
      return this.options.max;
    } else {
      return rating;
    }
  },

  actions: {
    rate: function(e, options) {
      this.rate(options.data.rating);
      e.preventDefault();
    }
  }
});
