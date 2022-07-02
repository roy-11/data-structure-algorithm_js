const main = (arg) => {
    const [n, x] = arg.split("\n")[0].split(" ").map(Number)
    let s = ""
    for(let i = 0; i < 26; i++) {
        for(let j = 0; j < n; j++) {
            s += String.fromCharCode(i + 65)
        }
    }
    console.log(s[x - 1])

}
