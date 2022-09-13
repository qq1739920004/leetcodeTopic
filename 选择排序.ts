function selectSort(arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let tem = i;
    for (let ii = i + 1; ii < arr.length; ii++) {
      if (arr[tem] > arr[ii]) {
        tem = ii;
      }
    }
    if (tem != i) {
      let temp = arr[i];
      arr[i] = arr[tem];
      arr[tem] = temp;
    }
  }
  return arr;
}
console.log(selectSort([13, 45, 2, 5, 16, 4]));
