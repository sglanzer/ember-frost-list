import Ember from 'ember'
import layout from 'ember-frost-list/templates/components/frost-list'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['frost-list'],

  items: Ember.computed.reads('model.[]', function() {
    return this.get('model').map((record) => {
      return {
        content: record
      }
    })
  })
})
