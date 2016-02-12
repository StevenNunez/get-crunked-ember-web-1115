import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', function() {
    this.route('developers');
  });
  this.route('drinks', function() {
    this.route('new');
    this.route('drink', {path: ":drink_id"});
  });
});

export default Router;
