import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('interview-test', {path:'interview-test/:candidate_id'}, function() {
    this.route('start');
    this.route('complete');
  });
  this.route('login',{path:'/'});
  this.route('candidate', function() {
    this.route('show');
    this.route('add');
    this.route('results',{path:'/:id/results'});
  });
});

export default Router;
