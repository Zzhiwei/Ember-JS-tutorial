import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace: "api",
    buildURL(...args) {
        return `${super.buildURL(...args)}.json`;
    },
    // buildURL(...args) {
    //     return `api/products.json`;
    // },

});
