module.exports = (someObj) => {
    var value = 0;
    var done = false;

    someObj.next = _ => {
        if (++value > 10){
            done = true
        }
        return {value:value, done:done}
    }
}
