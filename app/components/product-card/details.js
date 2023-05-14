import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service("shopping-cart"),
  actions: {
    onChangeColor(newColor) {
      this.get("onChangeColor")(newColor);
    },
    addToCart() {
      const name = this.get("name");
      const color = this.get("color");
      const colors = this.get("colors");
      const price = this.get("price");
      this.get('cart').addItem({
        name,
        color,
        image: colors.find((colorInfo) => colorInfo.color === color).image,
        price: price.current,
      });
    },
  },
});
