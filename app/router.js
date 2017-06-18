import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('page1');
  this.route('page2');
  this.route('login',{path:'/'});
});

export default Router;
