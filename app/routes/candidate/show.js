import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('candidate');
  },

  actions:{
    checkResults(id){
      this.transitionTo('candidate.results',id);
    },
    
    deleteCandidate(id){
      this.store.find('candidate', id).then(function (candidate) {
        candidate.destroyRecord(); // => DELETE
      });
    }
  }
});
