function divisors(integer) {
  let result = [];
  for (let i = 2; i < integer; i++){
    integer %i === 0 ? result.push(i) : null;
  }
  return result.length > 1 ? result : integer + " is prime";
};