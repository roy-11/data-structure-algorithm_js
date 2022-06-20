function main(input) {
  let [h1, h2, h3, w1, w2, w3] = input.trim().split(" ").map(Number);

  let count = 0;
  for (let i = 1; i < h1; i++) {
    for (let j = 1; j < h1 - i; j++) {
      for (let k = 1; k < h2; k++) {
        for (let l = 1; l < h2 - k; l++) {
          const h1w1 = i;
          const h1w2 = j;
          const h1w3 = h1 - i - j;
          const h2w1 = k;
          const h2w2 = l;
          const h2w3 = h2 - k - l;
          const h3w1 = w1 - h1w1 - h2w1;
          const h3w2 = w2 - h1w2 - h2w2;
          const h3w3 = w3 - h1w3 - h2w3;

          if (h3 === h3w1 + h3w2 + h3w3) {
            if (Math.min(h1w3, h2w3, h3w1, h3w2, h3w3) > 0) count++;
          }
        }
      }
    }
  }

  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
