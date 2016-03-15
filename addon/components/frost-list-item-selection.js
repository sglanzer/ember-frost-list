import Ember from 'ember'
import layout from 'ember-frost-list/templates/components/frost-list-item-selection'

export default Ember.Component.extend({
  layout: layout,
  classNames: ['selection'],
  classNameBindings: ['isSelected:selected']
})
