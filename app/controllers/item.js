import Ember from 'ember';

export default Ember.Controller.extend({
  color: Ember.computed("model.id", function() {
    return this.get("model.colors")[0].color;
  }),
  productImage: Ember.computed('model', 'color', function() {
    // console.log(this.get("model")) // when you first change page, you get the new model
    // console.log(this.get("color")); // however, properties on "this" are still old vals
    
    const colors = this.get("model").colors
    return colors.find(({color}) => color === this.get('color')).image;
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