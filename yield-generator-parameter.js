module.exports = function *multiplier() {

    var value = 0


    while(true){
        multiplier = yield value++
        if(multiplier){
            value*= multiplier
        }
    }
}
