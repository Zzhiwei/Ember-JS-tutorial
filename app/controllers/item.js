import Ember from 'ember';

export default Ember.Controller.extend({
    color: 'red',
    // 
    // get productImage() {
    //     return `/assets/images/beats-solo-${this.color}.png`
    // },
    productImage: Ember.computed('color', function() {
        return `/assets/images/beats-solo-${this.color}.png`
    }),
    actions: {
        onChangeColor(newColor) {
            this.set("color", newColor);
        }
    }
});
