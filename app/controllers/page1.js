import Ember from 'ember';

export default Ember.Controller.extend({
  ans1:'',
  actions:{
    nextPage(){
      debugger;
      this.get('model').save();

      this.transitionTo('page2');
    }
  }
});
