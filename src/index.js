'use strict'

import concat from 'unique-concat'
import omit from 'object-omit'

export default function createThenable (Promise, resolver) {
  return methods(Promise).reduce(createMethod, {then})
  function createMethod (thenable, name) {
    return Object.assign(thenable, {[name]: method(name)})
  }
  function method (name) {
    return function () {
      return this.then()[name](...arguments)
    }
  }
  function then (/*onFulfill, onReject*/) {
    return new Promise(resolver).then(...arguments)
  }
}

function methods (Promise) {
  return concat(['catch', 'finally'], Object.keys(omit(Promise.prototype, 'then')))
}
