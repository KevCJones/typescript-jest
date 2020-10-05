function add1(value: number) {
  if(typeof value !== 'number') {
    throw new Error('Input must be a number');
  }
  return value + 1;
}

export default add1;