import Ember from 'ember';

export default Ember.Service.extend({
  itemList: [],
  addItem(item) {
    console.log("adding: ", item)
    this.get("itemList").pushObject(item);
  },
});
