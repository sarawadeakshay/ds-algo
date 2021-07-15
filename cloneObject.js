
const input = {
  fruits: [{ orange: 10, mangoes: { grade1: 10, grade2: 20 }, grapes: 1 }],
  veg: [{ bhindi: 1, gobi: 2 }]
};

const deepClone = input => {
  let res = Array.isArray(input) ? [] : {};
  
  if (typeof input !== 'object') {
    return input;
  }
  
  for (let key in input) {
    res[key] = deepClone(input[key]);
  }
  return res;
};

const clone = deepClone(input);
clone.fruits[0].grapes = 55;
clone.fruits[0].mangoes.grade1 = 79;
console.log(clone.fruits[0].mangoes);
console.log('========');
console.log(input.fruits[0].mangoes)

