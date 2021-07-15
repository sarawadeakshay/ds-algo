const input = [1, 22, [4, 5, [111, 45, [23, 44]], 913, [12, 41]], 9, [62, 765]];

const flatArray = input => {
  let res = [];

  if (!Array.isArray(input)) {
    return input;
  }

  for (let val of input) {
    res = res.concat(flatArray(val));
  }
  return res;
}


console.log('res: ', flatArray(input));
