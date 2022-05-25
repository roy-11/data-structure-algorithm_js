function main(input) {
    const num = parseInt(input);
    const looptimes = Math.floor(Math.sqrt(num));
    const yakusuu = [];

    for(let i = 1; i <= looptimes; i++){
        if(num % i === 0){
            yakusuu.push(i,num/i);
        }
    }

    yakusuu.forEach((n)=>{
        console.log(n);
    })
}

main("12")
main("827847039317")
// main(require("fs").readFileSync("/dev/stdin", "utf8"));

function main2(input) {
    const num = parseInt(input);
    const yakusuu = [];

    for(let i = 1; i * i <= num; i++){
        if(num % i === 0){
            console.log(i);
            console.log(num/i);
        }
    }
}

main2("12")
main2("827847039317")
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
