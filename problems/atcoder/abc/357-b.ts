function main(input: string) {
  const newInput = input.trim();
  let lower = 0;
  let upper = 0;

  for (let i = 0; i < newInput.length; i++) {
    // 大文字かどうかをチェック
    if (newInput.charCodeAt(i) < 91) {
      upper++;
    } else {
      lower++;
    }
  }

  if (upper > lower) {
    console.log(newInput.toUpperCase());
  } else {
    console.log(newInput.toLowerCase());
  }
}

main(require("fs").readFileSync(__dirname + "/input", "utf8"));
