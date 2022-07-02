function main(input) {
    input = input.split(" ");
    const a = parseInt(input[0], 10);
    const b = parseInt(input[1], 10);
  
    if(a * b % 2 !== 0){
      console.log("Odd");
    }else{
      console.log("Even");
    }
}

// atCoder定型文
main(require("fs").readFileSync("/dev/stdin", "utf8"));
