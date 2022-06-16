const arr = ['a', 'A', '1', '1'];

const count = {};

arr.forEach(element => {
  count[element] = (count[element] || 0) + 1;
});


console.log(count);