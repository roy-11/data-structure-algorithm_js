function main() {
  const n = 1_000_000;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    const x = 6 * Math.random();
    const y = 9 * Math.random();

    const dist_33 = Math.sqrt((x - 3)**2 + (y-3)**2);
    const dist_37 = Math.sqrt((x - 3)**2 + (y-7)**2);

    if (dist_33 <= 3 || dist_37 <= 2) {
     count++;
    }
  }
  console.log(count)
}

main()
