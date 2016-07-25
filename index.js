function countdown(callback) {
  window.setTimeout(callback, [2])
}

//helper function
function createMultiplier(multiplierValue) {
  return function multiplier(number) {
    return number * multiplierValue
  }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplierValue, number) {
  return number * multiplierValue
}

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
