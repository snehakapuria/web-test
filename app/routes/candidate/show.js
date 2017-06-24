import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('candidate');
  },
  
  actions:{
    checkResults(id){
      this.transitionTo('candidate.results',id);
    }
  }
});
