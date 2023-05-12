import Ember from 'ember';

export default Ember.Controller.extend({
  /* the following sets properties which can be accessed by this.property in the view */
  // subtotal: 99,
  // tax: 22,
  // total: 11,

  /* this is another way */
  get subtotal() {
    /* can access model returned from routes inside here */
    return 9;
  },
  get tax() {
    return 0.1 * this.subtotal;
  },
  get total() {
    return 0.9 * this.subtotal;
  },
  /* define actions like this (can be attached to html elts as eventHandlers) */
  actions: {
    toggleBody() {
      this.toggleProperty("isExpanded");
    },
  },
});
