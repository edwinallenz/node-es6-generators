module.exports = function generate(isEven) {
    // return an Iterator for even numbers if isEven is true
    var value = isEven ? 0 : -1
    var iterable = {}
    var state = isEven

    iterable.next = (swap) => {
        if(swap){
            isEven = !isEven
        }
        value += swap ? 1 : 2
        return {value: value, done: false}
    }

    return iterable
    // or, return an Iterator for odd numbers if isEven is false
    // If `.next(swap)` receives `true`, swap between even <-> odd
    
}
