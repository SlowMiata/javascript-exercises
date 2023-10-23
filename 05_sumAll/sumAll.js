const sumAll = function(num1, num2) {


    if(num1 <0 || num2 < 0){
        return "ERROR"
    }

    if (typeof(num1) != 'number' || typeof(num2) != 'number'){
        return "ERROR"
    }

    let larger = 0
    let smaller = 0

    if(num1 < num2){
        larger = num2
        smaller = num1
    }else{
        larger = num1
        smaller = num2
    }

    let sum = 0
    for(let i = smaller; i <= larger; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
