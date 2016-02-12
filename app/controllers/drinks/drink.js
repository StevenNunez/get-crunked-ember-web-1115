import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newIngredient(){
      let proportion = this.store.createRecord('proportion');
      this.get('model.proportions').addObject(proportion);
    }
  }
});
