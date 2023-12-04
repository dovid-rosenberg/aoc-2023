

import {parseInput} from "../helpers/helpers";
async function main() {

    const data = await parseInput({rootDir: __dirname})
    console.log(solvePuzzle(data))
}

function solvePuzzle(data){
    const solution = data.reduce((acc, curr) => {
            let firstDigit, lastDigit

            firstDigit = curr.split("").find(char => Number.isInteger(Number(char)))
            lastDigit = curr.split("").reverse().find(char => Number.isInteger(Number(char)))
            if(!lastDigit) {
                lastDigit = firstDigit
            }
        return acc +   Number(firstDigit + lastDigit)
    }, 0)
    return solution
}

main()