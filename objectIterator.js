module.exports = (someObj, maxNum) => {
    var value = 0;
    var done = false;

    someObj.next = _ => {
        if (++value > (maxNum == null ? 10 : maxNum) ){
            done = true
            value = null
        }
        return {value:value, done:done}
    }
}
