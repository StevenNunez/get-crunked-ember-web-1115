import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('drink');
  },
  actions: {
    createDrink(){
      let model = this.modelFor(this.routeName);
      let proportions = model.get('proportions');

      model.save().then((drink) => {
        proportions.invoke('save');
        this.transitionTo("drinks.drink", drink)
      });
    }
  }
});
