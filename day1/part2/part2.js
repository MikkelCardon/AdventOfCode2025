import fs from 'fs'

const text = fs.readFileSync('./day1/input.txt', 'utf8')
const lines = text.split("\n")


let zero_counter = 0

let pointer = 50

lines.forEach(element => {
    let direction = element.charAt(0)
    let number = parseInt(element.substring(1))

    //if(direction === 'L') number *= -1
    let constant = 1
    if(direction === 'L') constant *= -1

    for (let index = 0; index < number; index++) {
        

        pointer = (pointer+constant+100) % 100
        if(pointer === 0) zero_counter++
    }
    
});

console.log(zero_counter);


