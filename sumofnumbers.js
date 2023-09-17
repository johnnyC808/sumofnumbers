function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
function sumWhile(list) {
  let sum = 0;
  let counter = 0;
  while (counter !== list.length) {
    sum += list[counter];
    counter += 1;
  }
  return sum;
}
function sumRecursion(list, index) {
  if (index === list.length) {
    return 0;
  }
  let sum = list[index];
  sum += sumRecursion(list, index + 1);
  return sum;
}
function sumTheSimpleWay(list) {
  const sum = _.reduce(list, function (memo, num) { return memo + num; }, 0);
  return sum;
}

const myList = [1, 2, 3];
console.log(sumFor(myList));
console.log(sumWhile(myList));
console.log(sumRecursion(myList, 0));
console.log(sumTheSimpleWay(myList));
