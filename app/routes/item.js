import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const { item_id } = params;
    return item_id;
  },
});
