function main(n) {
  n = parseInt(n)
  if(n === 1) {
    console.log("1");
    return;
  };
  
  const array = [[1],[1,1]];
  
  for(let i = 2; i < n; i++){
    const newArray = [];
    const prev = array[i-1];
    
    newArray.push(1);
    for(let j = 1; j < prev.length; j++){
      newArray.push(prev[j-1] + prev[j]) // array[i]をcurrentにして、current[j]=でもOK（pushの必要ない）
    }
    newArray.push(1);
    array.push(newArray)
  }
  
  for(let i = 0; i < array.length; i++){
    const a = array[i];
    let str = "";
    for(let j = 0; j < a.length; j++){
      str = a[j] + " " + str;
    }
    console.log(str);
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
