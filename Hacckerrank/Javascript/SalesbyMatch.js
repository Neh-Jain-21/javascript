function sockMerchant(n, ar) {
    let count = 0, final = 0;
    let visited = new Array(n);
    visited.fill(0, 0, n);
    ar.sort();
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
            let temp = ar[i];
            if (visited[j] == 0 && ar[j] == temp) {
                visited[j] = 1;
                count++;
            }
        }
        final += parseInt(count / 2);
        count = 0;
    }

    return final;
}

let n = 100;
let ar = new Array(42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42);

console.log(sockMerchant(n, ar));