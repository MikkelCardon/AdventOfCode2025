import fs from 'fs'

const text = fs.readFileSync('./day3/input.txt', 'utf8')
const split = text.split("\n")

let total_joltage = 0

split.forEach(line => {
    let numberArray = line.trim().split("")

    let largestNumber = 0
    let indexOfLargestNumber = 0
    for (let index = 9; index > 0; index--) {
        indexOfLargestNumber = numberArray.indexOf(index.toString())
        

        if(indexOfLargestNumber < numberArray.length -1 && indexOfLargestNumber !== -1){ //Excluding the last index
            largestNumber = index
            break
        }
    }  

    let secoundNumber = 0
    for (let index = 9; index > 0; index--) {
        let subArray = numberArray.slice(indexOfLargestNumber + 1) //Taking subArray to only get the indexes after the biggest number
        
        let indexOfSecound = subArray.indexOf(index.toString())

        if(indexOfSecound !== -1){
            secoundNumber = index
            break
        }
    }
    
    total_joltage += Number(`${largestNumber}${secoundNumber}`);
})

console.log(total_joltage);

