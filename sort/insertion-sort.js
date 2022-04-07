const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  const length = array.length;

  // 数字の数分だけ処理
  for (let i = 0; i < length; i++) {
    // 配列の先頭に移動するケース
    if (array[i] < array[0]) {
      const target = array.splice(i, 1)[0]; // 対象の要素を切り取り
      array.unshift(target); // 対象の要素を先頭に移動
    } else {
      // 左の数字より小さい数字（前にある要素の数字より小さい数字）だけをソートする
      // これは挿入ソートの部分であり、配列がほぼソートされている場合、高速になる
      if (array[i] < array[i - 1]) {
        // j < iで現在のソート済み範囲の要素を確認する
        // 小さい数字（array[i]）をどこに挿入すべきかをチェックする
        for (var j = 1; j < i; j++) {
          // その数字が現在のソート済み範囲の要素より小さいかつ
          // 現在のソート済み範囲の要素の1つ前の要素より大きい
          if (array[i] < array[j] && array[i] >= array[j - 1]) {
            const target = array.splice(i, 1)[0]; // 対象の要素を切り取り
            array.splice(j, 0, target); // j要素の位置に何を切り取らず、targetを挿入する
          }
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
