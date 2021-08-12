function countingValleys(steps, path) {
    let count=0,altitude=0;
    let alt = new Array(steps);
    for (let i = 0; i < steps; i++) {
        if (path[i] == "U") {
            altitude += 1;
            alt[i] = 1;
        }
        else {
            altitude -= 1;
            alt[i] = -1;
        }
        if (altitude == 0 && alt[i] == 1) {
            count++
        }
    }
    return count;
}

let steps =8;
let path = "DDUUDDUU";
countingValleys(steps, path);