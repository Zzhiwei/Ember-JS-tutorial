import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service("shopping-cart"),
  numItems: Ember.computed("shoppingCart.itemList.@each.count", function () {
    return this.get("shoppingCart").itemList.reduce((acc, item)=>acc + item.count, 0)
  })
});

// not working:
// numItems: Ember.computed("shoppingCart.itemList", function () {
  //   return this.get("shoppingCart").itemList.length
  // })
