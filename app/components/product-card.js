import Ember from 'ember';

export default Ember.Component.extend({
  number: 0,
  actions: {
    addNumber() {
      Ember.set(this, "number", this.number + 1)
    },
  },
});
