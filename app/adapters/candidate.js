import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace:'api',

  headers:{
    "content-type":'application/json',
    "Accept":"application/json"
  },

  ajax(url, method, hash) {
    if(method !== 'GET'){
        method = 'PUT';
    }

    return this._super(url,method,hash);
  }

});
