function squareOrSquareRoot(array) {
  return array.map(i=> Math.sqrt(i)%1 == 0 ?  Math.sqrt(i) : Math.pow(i, 2)  );
}