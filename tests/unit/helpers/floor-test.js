import { expect } from 'chai'
import { describe, it } from 'mocha'
import { floor } from 'ember-frost-list/helpers/floor'

describe.skip('FloorHelper', function () {
  it('works for positive numbers', function () {
    let result = floor([42.8])
    expect(result).to.equal(42)
  })

  it('works for negative numbers', function () {
    let result = floor([-42.8])
    expect(result).to.equal(-43)
  })
})
