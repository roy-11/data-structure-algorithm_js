function main(input) {
  const [hw, ...rows] = input.split("\n");
  const [h,w] = hw.split(" ").map(Number);
 
  for(let i = 0; i< rows.length; i++){
    rows[i] = rows[i].split(" ").map(Number);
  };
  
  const totalRows = [];
  for(let i = 0; i < h; i++){
    totalRows[i] = 0;
    for(let j = 0; j < w ; j++){
      totalRows[i] += rows[i][j];
    };
  };

  const totalColumns = [];
  for(let i = 0; i < w; i++){
    totalColumns[i] = 0;
    for(let j = 0; j < h ; j++){
      totalColumns[i] += rows[j][i];
    };
  };
  
  const result = [];
  for(let i = 0; i < h; i++){
    result[i] = [];
    for(let j = 0; j < w; j++){
      result[i][j] = totalRows[i] + totalColumns[j] - rows[i][j];
    }
  }
  
  for(let i = 0; i < result.length; i++){
    consol.log(...result[i])
  }
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));e
