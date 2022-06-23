const partition = (arr, r, h) => {
  let gta = arr[r];
  let a = r,
    k = h;
  do {
    do {
      a++;
    } while (arr[a] <= gta);
    do {
      k--;
    } while (arr[k] > gta);
    if (a < k) {
      let temp = arr[a];
      arr[a] = arr[k];
      arr[k] = temp;
    }
  } while (a < k);
  let temp = arr[k];
  arr[k] = arr[r];
  arr[r] = temp;
  return k;
};

const quickSort = (arr, r, h) => {
  let k;
  if (r < h) {
    k = partition(arr, r, h);
    quickSort(arr, r, k);
    quickSort(arr, k + 1, h);
  }
};

let arr = [,58,2,8,5,8,5,8];
quickSort(arr, 0, arr.length);
console.log(arr);
