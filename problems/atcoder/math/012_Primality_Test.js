function main(input) {
    const num = parseInt(input);

    let isPrime = true;
    for(let i = 2; i * i < num - 1;i++){
        if(num % i === 0) isPrime = false;
    }

    if(isPrime){
        console.log("Yes")
    }else {
        console.log("No")
    }
}

main("53");
main("77");
main("472249589291")
// main(require("fs").readFileSync("/dev/stdin", "utf8"));
