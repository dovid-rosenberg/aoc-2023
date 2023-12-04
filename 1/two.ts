

import {parseInput} from "../helpers/helpers";
async function main() {

    const data = await parseInput({rootDir: __dirname})
    console.log(solvePuzzle(data))
}

const NUMBERS = {
    one:'1',
    two:'2',
    three:'3',
    four:'4',
    five:'5',
    six:'6',
    seven:'7',
    eight:'8',
    nine:'9'
}

function solvePuzzle(data){
    const solution = data.reduce((acc, curr) => {
        let firstDigit, lastDigit
        for(let i = 0; i< curr.length; i++){
            if(Number.isInteger(Number(curr[i]))){
                if(!firstDigit){
                    firstDigit = curr[i]
                }
                lastDigit = firstDigit ? curr[i] : undefined
            }
            const nextFiveChars = curr.split('').splice(i).join('')
            for (const key of Object.keys(NUMBERS)) {
                if(nextFiveChars.startsWith(key)) {
                    if(!firstDigit){
                        firstDigit = NUMBERS[key]
                    }
                    lastDigit = firstDigit ? NUMBERS[key] : undefined
                }
            }
        }
        if(!lastDigit) {
            lastDigit = firstDigit
        }
        return acc + Number(firstDigit + lastDigit)
    }, 0)
    return solution
}

main()