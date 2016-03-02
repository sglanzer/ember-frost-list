import Ember from 'ember'
import _ from 'lodash'

export default Ember.Component.extend({
  classNames: ['frost-list-item'],
  classNameBindings: [
    'isSmall:small',
    'isLarge:large',
    'isSelected' // TODO?
  ],

  isSmall: Ember.computed.equal('detailLevel', 'small'),
  isLarge: Ember.computed.equal('detailLevel', 'large'),

  isSelected: Ember.computed('selections.[]', function() {
    return _.contains(this.get('selections'), this.get('model'))
  }),

  onclick: Ember.on('click', function (event) {
    if (!Ember.ViewUtils.isSimpleClick(event)) {
      return true
    }

    event.preventDefault()
    event.stopPropagation()

    if (_.isFunction(this.get('on-select'))) {
      this.get('on-select')({
        record: this.get('model'),
        isSelected: !this.get('isSelected')
      })
    }
  })
})
