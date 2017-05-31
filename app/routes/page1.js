import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    nextPage(){
      this.transitionTo('page2');
    }
  }

});
