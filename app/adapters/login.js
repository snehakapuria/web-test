import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace:'api',

  pathForType(){
    return 'login';
  },

  ajax(url, method, hash) {
    method = 'POST';

    return this._super(url,method,hash);
  }
});
