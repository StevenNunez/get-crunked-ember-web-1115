import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addDrink(){
      let drink = this.modelFor(this.routeName)
      drink.save().then((savedDrink) => {
        savedDrink.get('proportions').invoke('save');
        this.transitionTo('drinks.drink', savedDrink);
      });
    }
  }
});
