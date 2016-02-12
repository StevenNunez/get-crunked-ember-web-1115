import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    increaseProportion(){
      this.sendAction('onNewIngredient')
    },
    submit(){
      this.sendAction('onSubmit');
    }
  }
});
