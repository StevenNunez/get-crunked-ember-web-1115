import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('drink');
  },
  actions: {
    addDrink(){
      let drink = this.modelFor(this.routeName)
      // drink.save().then((savedDrink) => {
      var _this = this;
      drink.save().then(function(savedDrink){
        _this.transitionTo('drinks.drink', savedDrink);
      });
    }
  }
});
