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
  let i = 0;
  let j = 0;
  let checkEleArr1 = left[i];
  let checkEleArr2 = right[j];

  while (checkEleArr1 || checkEleArr2) {
    if (!checkEleArr2 || checkEleArr1 < checkEleArr2) {
      mergedArray.push(checkEleArr1);
      checkEleArr1 = left[++i];
    } else {
      mergedArray.push(checkEleArr2);
      checkEleArr2 = right[++j];
    }
  }

  console.table({ left, right, mergedArray });
  return mergedArray;
}

const answer = mergeSort(numbers);
console.log(answer);
