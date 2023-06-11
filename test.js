function mergeSort(unsorted) {
  let array1, array2;
  if (unsorted.length > 1) {
    array1 = mergeSort(unsorted.slice(0, unsorted.length / 2));
    array2 = mergeSort(unsorted.slice(unsorted.length / 2));
  } else return unsorted;
  return merge(array1, array2);
}
function merge(insertArray, array) {
  let index = 0;
  for (x in insertArray) {
    while (insertArray[x] > array[index] && index <= array.length - 1) index++;
    if (insertArray[x] !== array[index])
      array = [...array.slice(0, index), insertArray[x], ...array.slice(index)];
  }
  return array;
}

console.log(mergeSort([2, 8, 1, 3, 6, 7, 5, 4]));
