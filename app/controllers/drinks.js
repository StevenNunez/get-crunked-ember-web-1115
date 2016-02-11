import Ember from 'ember';

export default Ember.Controller.extend({
  canShowAddDrink: false,
  actions:{
    resetForm(){
      this.set("newDrink", "");
    },
    showAddDrink(){
      this.set("canShowAddDrink", true);
    },
    hideAddDrink(){
      this.set("canShowAddDrink", false);
    }
  }
});
