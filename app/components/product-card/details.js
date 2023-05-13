import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onChangeColor(newColor) {
        this.get('onChangeColor')(newColor);
    }
  },
});
