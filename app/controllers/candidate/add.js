import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    startTest(){
      debugger;
      this.get('model').save().then(()=>{
        debugger;
        this.transitionToRoute('interview-test.start',this.get('model.id'));
      });
    }
  }
});
