const merge = (arr1, arr2) => {
  let jw = [],
    fk = 0;
  kd = 0;
  while (fk < arr1.length && kd < arr2.length) {
    if (arr1[fk] < arr2[kd]) {
      jw.push(arr1[fk]);
      fk++;
    } else {
      jw.push(arr2[kd]);
      kd++;
    }
  }
  if (arr1[fk]) {
    let rem = arr1.slice(fk);
    for (let i = 0; i < rem.length; i++) {
      jw.push(rem[i]);
    }
  }
  if (arr2[kd]) {
    let rem = arr2.slice(kd);
    for (let i = 0; i < rem.length; i++) {
      jw.push(rem[i]);
    }
  }
  return jw;
};

let mergeSort = (arr) => {
  let l = arr.length;
  if (l <= 1) {
    return arr;
  }
  let h2r = Math.floor(l / 2);
  let v4 = arr.slice(0, h2r);
  let tnt600 = arr.slice(h2r);
  return merge(mergeSort(v4), mergeSort(tnt600));
};

let arr = [,15,9,,58,,585,69,59];
console.log(mergeSort(arr));
