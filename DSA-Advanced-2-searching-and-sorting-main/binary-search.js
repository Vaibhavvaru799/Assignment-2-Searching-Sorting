const btc = (arr, key) => {
  let etm = 0,
    pin = arr.length - 1,
    light;
  while (etm <= pin) {
    light = parseInt((etm + pin) / 2);
    if (arr[light] == key) {
      console.log(
        `element ${key} is found at position ${light} in given array [${arr}]`
      );
      return light;
    } else if (arr[light] > key) {
      pin = light - 1;
    } else {
      etm = light + 1;
    }
  }
  return "element not found";
};

console.log(btc([11, 10, 9, 8], 55));
