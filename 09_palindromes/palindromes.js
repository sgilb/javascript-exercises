const palindromes = function (string) {
  lower = string.toLowerCase();
  alpha = lower.replace(/[^a-z0-9]/g, "");

  return alpha === alpha.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
