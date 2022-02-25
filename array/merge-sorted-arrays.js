function mergeSortedArray(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  let checkEleArr1 = arr1[i];
  let checkEleArr2 = arr2[j];

  while (checkEleArr1 || checkEleArr2) {
    if (!checkEleArr2 || checkEleArr1 < checkEleArr2) {
      mergedArray.push(checkEleArr1);
      checkEleArr1 = arr1[++i];
    } else {
      mergedArray.push(checkEleArr2);
      checkEleArr2 = arr2[++j];
    }
  }

  return mergedArray;
}

const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
console.log(mergeSortedArray(arr1, arr2));
