const insertionSort = (arr) => {
  let kas = arr.length;
  for (let q = 1; q < kas; q++) {
    let ddlj = arr[q];
    let u = q - 1;
    while (u >= 0 && arr[u] > ddlj) {
      arr[u + 1] = arr[u];
      u = u - 1;
    }
    arr[u + 1] = ddlj;
  }
  console.log(arr);
};

let arr = [2,5,8,4,5,2,8,4];
insertionSort(arr);
