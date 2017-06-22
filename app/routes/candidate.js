import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('candidate');
  },

  actions:{
    addCandidate(){
      this.transitionTo('candidate.add');
    },
    displayCandidates(){
      this.transitionTo('candidate.show');
    }
  }
});
