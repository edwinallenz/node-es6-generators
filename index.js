'use strict'
let Iterator = require('./object-iterator')
let BuildInIterator = require('./build-in-iterators')
let EvenOdd = require('./even-odd')
let YieldGenerator = require('./yield-generator')
let MultiplierGenerator = require('./multiplier-generator')

var obj =  {}
var obj2 = {}
var result;

Iterator(obj,15)
do{
    result = obj.next()
//    console.info(result)
}while(!result.done)


Iterator(obj2)
do{
    result = obj2.next()
    //console.info(result)
}while(!result.done)


let values =  ['ama','de',3,22,12,'casa']

console.info(BuildInIterator(values))

let evenOdd = EvenOdd(true)
console.info(evenOdd.next())
console.info(evenOdd.next())
console.info(evenOdd.next())
console.info(evenOdd.next())
console.info('----------------')
console.info(evenOdd.next(true))
console.info(evenOdd.next())
console.info(evenOdd.next())
console.info(evenOdd.next())

console.info('----------------')
let oddEven = EvenOdd(false)
console.info(oddEven.next())
console.info(oddEven.next(false))
console.info(oddEven.next())
console.info(oddEven.next(false))
console.info('----------------')
console.info(oddEven.next(true))
console.info(oddEven.next())
console.info(oddEven.next())


console.info('----------------')
console.info('YIELD GENERATOR')
console.info('----------------')

let yieldGenerator = YieldGenerator(false)
console.info(yieldGenerator.next())
console.info(yieldGenerator.next(false))
console.info(yieldGenerator.next())
console.info(yieldGenerator.next(false))
console.info('----------------')
console.info(yieldGenerator.next(true))
console.info(yieldGenerator.next())
console.info(yieldGenerator.next())

console.info('----------------')
console.info('MULTIPKIER')
console.info('----------------')

let multiplierGenerator = MultiplierGenerator(false)
console.info(multiplierGenerator.next())
console.info(multiplierGenerator.next())
console.info(multiplierGenerator.next(2))
console.info(multiplierGenerator.next(5))
console.info(multiplierGenerator.next(3))


