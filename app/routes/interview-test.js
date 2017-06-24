import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return Ember.RSVP.hash({
      candidate: this.store.find('candidate',params.candidate_id),
      questions : this.store.createRecord('question')
    });
  },

  actions:{
    willTransition(transition){
      if(transition.targetName === 'login'){
        transition.abort();
      }
    }
  }
});
