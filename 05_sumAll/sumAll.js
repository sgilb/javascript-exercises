const sumAll = function (first, last) {
  if (
    first < 0 ||
    typeof first !== "number" ||
    last < 0 ||
    typeof last !== "number"
  )
    return "ERROR";

  let firstNum = first > last ? last : first;
  let lastNum = last < first ? first : last;

  let result = 0;
  for (let i = firstNum; i <= lastNum; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
