const isNumber = function(number) {
  return !isNaN(number);
};

const addTwoList = function(list1, list2) {
  let length = Math.max(list1.length, list2.length);
  let addedList = [];
  for (let index = 0; index < length; index++) {
    addedList[index] = list1[index] + list2[index];
  }
  return addedList;
};

module.exports = { isNumber, addTwoList };