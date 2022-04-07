const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  // 配列の中の数値の要素の数だけループさせる
  for (let i = 0; i < array.length; i++) {
    // 最小値を見つけるためのループ
    // 既にソート済みの値を対象外とするためループ開始位置をずらす
    let minimumIndex = i;
    for (let j = 1 + i; j < array.length; j++) {
      if (array[minimumIndex] > array[j]) minimumIndex = j;
    }

    const tmp = array[i];
    array[i] = array[minimumIndex];
    array[minimumIndex] = tmp;
  }
}

selectionSort(numbers);
console.log(numbers);
