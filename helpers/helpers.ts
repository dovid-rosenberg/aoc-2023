import * as fs from "node:fs/promises";
import * as path from "node:path";

export async function parseInput({rootDir, fileName = 'input.txt',testQuantity}){
    const rawData = await  fs.readFile(path.join(rootDir, fileName), { encoding: 'utf8' })
    let array = rawData.split("\n")
    if(testQuantity){
        array = array.splice(0,testQuantity)
    }
    return array
}