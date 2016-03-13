'use strict'

module.exports = function *multiplier() {

    var value = 1
    var multiplier = 1
    while(true){

        multiplier = yield multiplier * value++
        if(!multiplier)
            multiplier = 1
    }
}
