function sortByLength (array) {
  
  return array.sort( (a, b) => a.length - b.length)

};

console.log(sortByLength(['what', 'would', 'you', 'do']))



// parameters: array     // an array of strings of different lengths
// return: arr     // an array containg the same strings, but now they're ordered shortest to longest
// e.g. sortByLength(['what', 'would', 'you', 'do'])
// results in ['do', 'you', 'what', 'would']


// return the sort method called upon array with the function (a, b) => a.length = b.length
