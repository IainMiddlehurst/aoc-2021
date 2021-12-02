var fs = require("fs");

function calculatePosition(input) {
    let horizontal = 0;
    let depth = 0;
    input.map(el => {
        const split = el.split(" ");
        if(split[0] === "forward") {
            horizontal = horizontal + parseInt(split[1]);
        } else if(split[0] == "down") {
            depth = depth + parseInt(split[1]);
        } else {
            depth = depth - parseInt(split[1]);
        }
    })

    return horizontal * depth
}

function calculatePositionFromFile() {
    var input = fs.readFileSync("day-2/data.txt", "utf-8").split("\n")
    console.log(input);

    return calculatePosition(input);
}

module.exports = {
    calculatePosition,
    calculatePositionFromFile
}