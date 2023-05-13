import Ember from 'ember';
import { products } from '../data/products';

export default Ember.Route.extend({
    model() {
        return products
    }
});
