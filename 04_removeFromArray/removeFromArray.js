const removeFromArray = function() {
  const args = Array.from(arguments);
  let array = args[0];

  for (let i = 1; i < args.length; i++) {
    let index = array.indexOf(arguments[i]);

    if (!array[index]) continue;
    array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
