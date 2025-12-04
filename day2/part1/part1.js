import fs from 'fs'

const text = fs.readFileSync('./day2/input.txt', 'utf8')
const split = text.split(",")

let count = 0

split.forEach(range => {
    let splittedRange = range.split("-")
    let numb1 = parseInt(splittedRange[0])
    let numb2 = parseInt(splittedRange[1])

    for (let index = numb1; index <= numb2; index++) {
        let stringNumber = index.toString()
        let stringLength = stringNumber.length

        if(stringLength % 2 == 0){
            let middle = stringLength / 2
            let string1 = stringNumber.substring(0, middle)
            let string2 = stringNumber.substring(middle)
            
            if(string1 === string2) count += index
        }

    }
})

console.log(count);

