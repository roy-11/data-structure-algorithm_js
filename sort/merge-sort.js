const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  const left = array.splice(0, array.length / 2);
  const right = array;

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const mergedArray = [];
  let li = 0;
  let ri = 0;

  while (left[li] || right[ri]) {
    if (left[li] < right[ri] || right[ri] === undefined) {
      mergedArray.push(left[li]);
      li++;
    } else {
      mergedArray.push(right[ri]);
      ri++;
    }
  }

  console.table({ left, right, mergedArray });
  return mergedArray;
}

const answer = mergeSort(numbers);
console.log(answer);
