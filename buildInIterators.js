'use strict'

module.exports = function filterForNumbers(iterable) {
    // loop over iterable, adding numeric values to a new array
    let numberArray = []

    for(let item of iterable){
        if(typeof item === 'number'){
            numberArray.push(item)
        }
    }
    // then return the new array of numbers
    return numberArray
}
