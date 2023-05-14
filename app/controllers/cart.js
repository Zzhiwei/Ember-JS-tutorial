import Ember from 'ember';

export default Ember.Controller.extend({
  cart: Ember.inject.service("shopping-cart"),
  subtotal: Ember.computed("cart.itemList.@each.count", function () {
    return this.get("cart").itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }),
  tax: Ember.computed("subtotal", function () {
    return 0.1 * this.get("subtotal");
  }),
  total: Ember.computed("subtotal", function () {
    return 0.9 * this.get("subtotal");
  }),
  /* define actions like this (can be attached to html elts as eventHandlers) */
  actions: {
    toggleBody() {
      this.toggleProperty("isExpanded");
    },
    updateItemCount(item, event) {
      const newCount = event.target.value;
      const cart = this.get("cart");

      if (newCount >= 0) {
        cart.itemList.removeObject(item);
        cart.itemList.pushObject({ ...item, count: newCount });
      } else {
        // prevents value to go below 0
        cart.itemList.removeObject(item);
        cart.itemList.pushObject({ ...item, count: 0 });
      }
    },
  },
  /* the following sets properties which can be accessed by this.property in the view */
  // subtotal: 99,
  // tax: 22,
  // total: 11,
  /* this is another way */
  // get subtotal() {
  //   /* can access model returned from routes inside here */
  //   return 99
  // },
  // get tax() {
  //   return 0.1 * this.subtotal;
  // },
  // get total() {
  //   return 0.9 * this.subtotal;
  // },
});
