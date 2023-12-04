import * as fs from "node:fs/promises";
import * as path from "node:path";

export async function parseInput({rootDir, fileName = 'input.txt'}){
    const rawData = await  fs.readFile(path.join(rootDir, fileName), { encoding: 'utf8' })
    const array = rawData.split("\n")
//    array.splice(-1,1)
    
    return array
}