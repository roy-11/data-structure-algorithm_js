const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  // 配列の中の数値の要素の数だけループさせる
  for (let i = 0; i < array.length; i++) {
    // 最大値を右にずらす（既に移動させたものは比較する必要がないため-jする）
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);
