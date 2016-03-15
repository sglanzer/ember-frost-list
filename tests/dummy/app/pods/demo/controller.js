import Ember from 'ember'
import config from '../../config/environment'

export default Ember.Controller.extend({
  detailLevel: 'small',
  listItems: Ember.A(),
  listSelections: Ember.A(),

  componentPath: Ember.computed({
    get () {
      if (config.isFrostGuideDirectory) {
        return 'user-list-item'
      } else {
        return 'demo/user-list-item'
      }
    }
  }),

  actions: {
    loadPrevious() {
      let first = this.get('model.first');
      if (first <= 0) {
        return
      }

      this.store.query('list-item', {
        pageSize: 100,
        start: first - 100
      }).then((newItems) => {
        this.set('listItems', newItems.content.concat(this.get('listItems')))
        this.set('model.first', first - 100)
      })
    },

    loadNext() {
      let last = this.get('model.last');
      this.store.query('list-item', {
        pageSize: 100,
        start: last
      }).then((newItems) => {
        this.set('listItems', this.get('listItems').concat(newItems.content))
        this.set('model.last', last + 100)
      })
    },

    selected(attrs) {
      if (attrs.isSelected) {
        this.get('listSelections').addObject(attrs.record)
      } else {
        this.get('listSelections').removeObject(attrs.record)
      }
    }
  }
})
