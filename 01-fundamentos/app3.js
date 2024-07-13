const fs = require('fs')

const data = fs.readFileSync('README.md', 'utf8');

const reactWordCount = data.match(/React/gi ?? []).length 


console.log('Palbra React', reactWordCount)