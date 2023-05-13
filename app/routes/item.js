import Ember from 'ember';
import { products } from '../data/products';

export default Ember.Route.extend({
  model(params) {
    const { item_id } = params;
    const product = products.find(({id}) => id === item_id)
    return product;
  },
});
