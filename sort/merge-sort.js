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
  let leftIndex = 0;
  let leftElement = left[leftIndex];
  let rightIndex = 0;
  let rightElement = right[rightIndex];

  while (leftElement || rightElement) {
    if (leftElement < rightElement || rightElement === undefined) {
      mergedArray.push(leftElement);
      leftElement = left[++leftIndex];
    } else {
      mergedArray.push(rightElement);
      rightElement = right[++rightIndex];
    }
  }

  console.table({ left, right, mergedArray });
  return mergedArray;
}

const answer = mergeSort(numbers);
console.log(answer);
