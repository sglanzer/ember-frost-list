import { expect } from 'chai'
import { describeComponent, it } from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'frost-list-selection-indicator',
  'Integration: FrostListSelectionIndicatorComponent',
  {
    integration: true
  },
  function () {
    it.skip('"selected" class is NOT set by default', function () {
      this.render(hbs`
        {{frost-list-selection-indicator}}
      `)

      expect(
        this.$('.frost-list-selection-indicator').hasClass('selected')
      ).to.eql(false)
    })

    it.skip('sets "selected" class when isSelected=true', function () {
      this.render(hbs`
        {{frost-list-selection-indicator
          isSelected=true
        }}
      `)

      expect(
        this.$('.frost-list-selection-indicator').hasClass('selected')
      ).to.eql(true)
    })
  }
)
