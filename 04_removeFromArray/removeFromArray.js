const removeFromArray = function(array,...args) {

    let returnArray = []

    array.forEach(element => {

        if(!args.includes(element)){
            returnArray.push(element)
        }

        
    });

    return returnArray



};

// Do not edit below this line
module.exports = removeFromArray;
