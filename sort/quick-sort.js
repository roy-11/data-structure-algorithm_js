const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right) {
  // 要素が1つ以上ある場合のみソート（左のindexより右のindexの方が大きい）
  if (left < right) {
    const partitionIndex = partition(array, left, right);

    quickSort(array, left, partitionIndex - 1); // 左側で繰り返し処理
    quickSort(array, partitionIndex + 1, right); // 右側で繰り返し処理
  }
  return array;
}

// 分割とソート
function partition(array, left, right) {
  const pivotIndex = right;
  const pivotValue = array[pivotIndex];
  let partitionIndex = left; // 分割地点：ピボットより大きい数で一番左のindex

  // 左から右（<でピボットを含まない）まで確認
  for (let i = left; i < pivotIndex; i++) {
    // ピボットより値が小さい要素がでてきたら、分割地点（大きい数字）と入れ替える
    // ピボットより小さい数字を左、大きい数字を右にしている→ 「>」にすると逆になる
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex); // 小さい数と大きい数の場所を入れ替える
      partitionIndex++; // インクリメントする(条件文でない一番左のindexになる)
    }
  }

  // ピボットと分割地点の要素を入れ替えてから、分割地点のインデックスを返す
  swap(array, pivotIndex, partitionIndex);
  return partitionIndex;
}

// swap処理
function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);
