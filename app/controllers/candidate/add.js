import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    startTest(){
      this.get('model').save().then(()=>{
        this.transitionToRoute('interview-test.start',this.get('model.id'));
      });
    }
  }
});
