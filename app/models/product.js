import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    description: DS.attr(),
    price: DS.attr(),
    features: DS.attr(),
    colors: DS.attr(),
});
