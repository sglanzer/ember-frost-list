/**
 * Integration test for the frost-list-item-selection component
 */

// import {expect} from 'chai'
// import {describeComponent, it} from 'ember-mocha'
// import hbs from 'htmlbars-inline-precompile'
// import {$hook, initialize as initializeHook} from 'ember-hook'
// import wait from 'ember-test-helpers/wait'
// import {afterEach, beforeEach, describe} from 'mocha'
// import sinon from 'sinon'

// import {integration} from 'ember-frost-list/tests/helpers/ember-test-utils/describe-component'

// describeComponent(...integration('frost-list-item-selection'), function () {
//   let sandbox

//   beforeEach(function () {
//     sandbox = sinon.sandbox.create()
//     initializeHook()
//   })

//   afterEach(function () {
//     sandbox.restore()
//   })

//   it.skip('should have real tests', function () {
//     expect(true).to.equal(false)
//   })

//   describe.skip('after render', function () {
//     beforeEach(function () {
//       this.setProperties({
//         myHook: 'myThing'
//       })

//       this.render(hbs`
//         {{frost-list-item-selection
//           hook=myHook
//         }}
//       `)

//       return wait()
//     })

//     it('should have an element', function () {
//       expect(this.$()).to.have.length(1)
//     })

//     it('should be accessible via the hook', function () {
//       expect($hook('myThing')).to.have.length(1)
//     })
//   })
// })
