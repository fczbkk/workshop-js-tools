const {importedFunction} = require('./external-functions')
const symbols = require('./symbols.svg')

require('./style.css')

console.log('main file')
importedFunction()

const svg_image = document.body.appendChild(document.createElement('img'))
svg_image.setAttribute('src', symbols)
svg_image.setAttribute('id', 'test_image')

