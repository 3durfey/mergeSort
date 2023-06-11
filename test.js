function mergeSort(unsorted) {
  let array1, array2;
  if (unsorted.length >= 3) {
    array1 = mergeSort(unsorted.slice(0, unsorted.length / 2));
    array2 = mergeSort(unsorted.slice(unsorted.length / 2));
  } else {
    return sortBaseCase(unsorted);
  }
  return merge(array1, array2);
}

function merge(insertArray, array) {
  let index = 0;
  for (x in insertArray) {
    if (insertArray[x] < array[index]) {
      array = insert(index, insertArray[x], array);
    } else {
      while (insertArray[x] > array[index] && index <= array.length - 1) {
        index++;
      }
      if (insertArray[x] !== array[index])
        array = insert(index, insertArray[x], array);
    }
  }
  return array;
}

function insert(index, input, array) {
  let arr = [...array.slice(0, index), input, ...array.slice(index)];
  return arr;
}
function sortBaseCase(array) {
  if (array.length === 1) return array;
  if (array[0] > array[1]) {
    let temp = array[1];
    array[1] = array[0];
    array[0] = temp;
  }
  return array;
}

console.log(mergeSort([2, 8, 1, 3, 6, 7, 5, 4]));
