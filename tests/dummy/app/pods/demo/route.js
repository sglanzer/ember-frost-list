import Ember from 'ember'

export default Ember.Route.extend({
  model() {
    return this.store.query('list-item', {
      pageSize: 100,
      start: 0
    }).then(items => {
      return {
        items,
        first: 0,
        last: 100
      }
    })
  },

  setupController(controller, model) {
    this._super(controller, model)
    controller.set('listItems', model.items.content)
  }
})
