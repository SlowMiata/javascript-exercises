const convertToCelsius = function(F) {

let C
C = ((F-32) * (5/9))
return Number(C.toFixed(1))
};

const convertToFahrenheit = function(C) {

let F
F = (C * (9/5) + 32)
return Number(F.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
