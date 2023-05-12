import Ember from 'ember';

export default Ember.Component.extend({
  number: 0,
  actions: {
    addNumber() {
      this.number += 1;
    },
  },
});
