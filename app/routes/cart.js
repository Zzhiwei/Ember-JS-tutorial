import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const items = [{ price: 10 }, { price: 15 }];
    return items;
  },
});
