import Ember from 'ember';

export default Ember.Controller.extend({
  hasException: false,
  
  actions:{
    signon(){
      this.get('model').save().then(()=>{
        this.transitionTo('candidate');
      }).catch((adapterError)=>{
        this.set('error',adapterError);
        this.set('hasException',true);
      });
    }
  }
});
