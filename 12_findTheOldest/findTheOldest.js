const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) =>
    getAge(oldest.yearOfBirth, oldest.yearOfDeath) <
    getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
      ? currentPerson
      : oldest
  );
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
