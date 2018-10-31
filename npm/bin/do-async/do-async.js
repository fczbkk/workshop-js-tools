#!/usr/bin/env node

console.log('Started doing something asynchronously...')

setTimeout(function () {
  console.log('DONE')
}, 3000)
