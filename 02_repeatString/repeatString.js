const repeatString = function(word, count) {

    if (count < 0){
        return "ERROR";
    }

    let string = ""

    for(let i = 0; i < count; i++){
        string = string.concat(word)

    
    }
    return string

};

repeatString("hey",3)

// Do not edit below this line
module.exports = repeatString;
