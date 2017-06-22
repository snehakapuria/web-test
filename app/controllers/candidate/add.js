import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    startTest(){
      debugger;
      this.get('model').save().then(()=>{
        this.transitionToRoute('interview-test',this.get('model.id'));
      });
    }
  }
});
