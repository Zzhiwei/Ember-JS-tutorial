import Ember from 'ember';

class Item {
  // in ember 2.0, there is no tracked, so need to find a way to trigger UI update when count updates
  // @tracked count;

  name;
  color;
  image;
  price;

  constructor(item) {
    this.count = item.count;
    this.name = item.name;
    this.color = item.color;
    this.image = item.image;
    this.price = item.price;
  }
}

export default Ember.Service.extend({
  itemList: [],
  addItem(item) {
    console.log("adding: ", item);
    const existingItem = this.itemList.find(({ name, color }) => {
      return name === item.name && color === item.color;
    });

    if (existingItem) {
      // any updates to objects monitored by Ember must be made with set() function
      Ember.set(existingItem, 'count', existingItem.count + 1);
    } else {
      this.get("itemList").pushObject(new Item({...item, count: 1}));
    }
  },
});
