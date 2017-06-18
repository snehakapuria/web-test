import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace:'api',
// host:'https://localhost:3000',
  headers:{
    "content-type":'application/json',
    "Accept":"application/json"
  },
  ajax(url, method, hash) {
    debugger;
    method = "POST";

    return this._super(url,method,hash);
}

});
