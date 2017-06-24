import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    nextPage(){
      this.set('model.questions.candidate_id', this.get('model.candidate.id'));
      this.get('model.questions').save().then(()=>{
          this.transitionTo('interview-test.complete',this.get('model.candidate.id'));
      });
    }
  }
});
