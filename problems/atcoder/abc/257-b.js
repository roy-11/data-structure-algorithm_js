function main(input) {
   let [NKQ,As,Ls] = input.trim().split("\n");
   let [N,K,Q] = NKQ.split(" ").map(Number);
   As = As.split(" ").map(Number);
   Ls = Ls.split(" ").map(Number);

   const masu = new Array(N).fill(0);
   for(let i = 0; i < K; i++){
     masu[As[i]-1] = 1;
   }
   
   for(let i = 0; i < Q; i++){
     let count = 0;
     for(let j = 0; j < N;j++){
       if(masu[j] === 1) count++;
       if(count === Ls[i] && masu[j+1] === 0){
         const temp = masu[j]
         masu[j] = 0;
         masu[j+1] = temp;
         done = true;
       }
     }
   }
   
   const answer = [];
   masu.forEach((e,index)=> {
     if(e !== 0) answer.push(index+1);
   })
   console.log(...answer)
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
