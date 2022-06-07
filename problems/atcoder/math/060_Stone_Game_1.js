function main(input) {
  let nums = parseInt(input);
  
  if(nums % 4 === 0){
    console.log("Second");
  }else{
    console.log("First");
  };
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
