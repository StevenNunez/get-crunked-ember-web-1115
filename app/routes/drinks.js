import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('drink');
  },
  actions:{
    addDrink(drinkToBeAdded){
      this.modelFor(this.routeName).pushObject(drinkToBeAdded);
      this.controllerFor(this.routeName).send("resetForm");
    }
  }
});
