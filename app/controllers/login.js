import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    signon(){
      this.get('model').save().then(()=>{
        this.transitionTo('page1');
      });
    }
  }
});
