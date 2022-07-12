function main(input) {
  const N = Number(input);

  let count = 0;
  for(let i = 1; i <= N; i++){
    const decimal = i.toString(10);
    const octal = i.toString(8);
    const merge = decimal + octal;

    let include7 = false;
    for(let j = 0; j < merge.length; j++){
      if(merge[j] === "7"){
        include7 = true;
        break;
      };
    };

    if(!include7) count++;
  }
  console.log(count);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

