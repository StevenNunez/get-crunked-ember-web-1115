import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addIngredient(){
      this.sendAction('onNewIngredient');
    },
    submit(){
      this.sendAction('onSubmit');
    }
  }
});
