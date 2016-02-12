import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('drink', params["drink_id"]);
  },
  actions: {
    updateDrink(){
      let model = this.modelFor(this.routeName);
      let proportions = model.get('proportions');

      model.save().then((drink) => {
        proportions.invoke('save');
        this.transitionTo("drinks.drink", drink)
      });
    }
  }
});
