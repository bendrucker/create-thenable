'use strict'

import test from 'tape'
import Bluebird from 'bluebird'
import Q from 'q'
import createThenable from '../'

test((t) => {
  t.test('Bluebird', (t) => {
    return createThenable(Bluebird, (resolve) => {
      resolve('foo')
    })
    .tap()
    .then((value) => {
      t.equal(value, 'foo')
      t.end()
    })
  })
  t.test('Q', (t) => {
    return createThenable(Q.Promise, (resolve) => {
      resolve('foo')
    })
    .finally(function () {})
    .then((value) => {
      t.equal(value, 'foo')
      t.end()
    })
  })
})
