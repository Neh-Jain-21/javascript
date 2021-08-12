function jumpingOnClouds(c) {
    let n = c.length;
    let jump = 0, start = c[0];

    for (let i = 0; i < n-1; i++) {
        if (start == c[i + 2]) {
            i = i + 1;
            jump++;
            // console.log("if part");
        }
        else {
            jump++;
            // console.log("else part");
        }
    }
    return jump;
}

let c = new Array(0, 0, 0, 0, 1, 0);

jumpingOnClouds(c);