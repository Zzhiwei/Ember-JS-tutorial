import Ember from 'ember';

export default Ember.Component.extend({
  // number: 0,
  // actions: {
  //   addNumber() {
  //     this.set("number", this.number + 1);
  //   },
  // },
  productImage: Ember.computed("product", function () {
    return this.get("product").colors[0].image;
  }),
});
