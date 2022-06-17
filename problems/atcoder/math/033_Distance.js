function main(input) {
  let [ax,ay,bx,by,cx,cy] = input.split(/ |\n/).map(BigInt);
  
  const BAx = ax - bx;
  const BAy = ay - by;
  const BCx = cx - bx;
  const BCy = cy - by;
  const CAx = ax - cx;
  const CAy = ay - cy;
  const CBx = bx - cx;
  const CBy = by - cy;
  
  let pattern = 2;
  if(BAx*BCx+BAy*BCy < 0n) pattern = 1;
  if(CAx*CBx+CAy*CBy < 0n) pattern = 3;
  
  let answer = 0;
  if(pattern === 1) answer = Math.sqrt((BAx*BAx + BAy*BAy).toString(10));
  if(pattern === 3) answer = Math.sqrt((CAx*CAx + CAy*CAy).toString(10));
  
  if(pattern === 2) {
    const S = Math.abs((BAx*CAy - BAy*CAx).toString(10));
    const BCLength = Math.sqrt((BCx*BCx + BCy*BCy).toString(10));
    answer = S/BCLength
  }
  
  console.log(answer)
};
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
