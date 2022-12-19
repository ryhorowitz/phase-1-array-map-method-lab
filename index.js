const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(str => titlize(str))
}

function titlize(str) {
  // 'what does the this keyword mean?'
  const words = str.split(' ')
  // [what, does, the, this, keyword, mean?]
  //for each word capitalize the first letter
  let titledWords = words.map( word => {
    let letters = word.split('')
    // ['w, h, a, t']
    letters[0] = letters[0].toUpperCase()
    letters = letters.join('')
    // console.log('letters', letters)
    return letters
  })
  titledWords = titledWords.join(' ')
  // console.log('titledWords', titledWords)
  return titledWords
}

