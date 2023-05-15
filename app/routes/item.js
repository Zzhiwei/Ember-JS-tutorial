import Ember from 'ember';
import { products } from '../data/products';

export default Ember.Route.extend({
  async model(params) {
    const { item_id } = params;
    // const products = await this.store.findAll("product");
    const product = products.find(({id}) => id === item_id)
    return product;
  },
});
