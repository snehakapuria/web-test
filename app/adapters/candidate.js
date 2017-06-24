import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace:'api',

  headers:{
    "content-type":'application/json',
    "Accept":"application/json"
  }

});
