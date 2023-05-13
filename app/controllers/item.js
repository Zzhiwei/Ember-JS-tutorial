import Ember from 'ember';

export default Ember.Controller.extend({
  color: Ember.computed("model.colors", function() {
    return this.get("model.colors")[0].color;
  }),
  productImage: Ember.computed('color', function() {
    return this.get("model").colors.find(({color}) => color === this.get('color')).image;
  }),
  actions: {
    onChangeColor(newColor) {
      this.set("color", newColor);
    },
  },
});

//this.get is not a function
//   color: this.get("model.colors")[0].color, 


/** this doesn't work because it is not triggering UI update when 'color' changes */
//   get productImage() {
//     return `/assets/images/beats-solo-${this.color}.png`;
//   },