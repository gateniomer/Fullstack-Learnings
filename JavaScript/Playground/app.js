// const multiplyBy = function(multiplier){
//   return function(num){return num*multiplier};
// }
// const multiplyBy = (multiplier) => (num) => multiplier * num;

// console.log(multiplyBy(6)(4));

// const multiplyByTwo = multiplyBy(2);
// const multiplyByTen = multiplyBy(10);

// console.log(multiplyByTwo(10));
// console.log(multiplyByTen(10));

const attackType = (type = 'melee') => (range = 1) => console.log(`${type} attack with range of ${range}`);

const spearAttack = attackType();
const magicBallAttack = attackType('magic');
console.log(spearAttack());
console.log(magicBallAttack(4));

