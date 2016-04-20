import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let record = this.store.createRecord('user');
    record.save();
    return this.store.findAll('user');
  },

  setupController(controller, model) {
    controller.set('users', model);
  }
});
