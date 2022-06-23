function sortarrayString(arr) {
  for (var f = 0; f < arr.length; f++) {
    for (var c = f + 1; c < arr.length; c++) {
      if (arr[f] > arr[c]) {
        var temp = arr[f];
        arr[f] = arr[c];
        arr[c] = temp;
      }
    }
  }
  return arr;
}
var arr = [
  "S1000rr",
  "M1000rr",
  "Dytona676",
  "z900",
  "H2R",
  "H2",
  "Dukati V4",
  "ZX10r",
  "Beneli 600",
  "speed teipple",
];
console.log("input string:");
console.log(arr);
console.log("output sorted:");
console.log(sortarrayString(arr));
