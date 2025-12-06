import { subtle } from 'crypto'
import fs from 'fs'

const text = fs.readFileSync('./day1/input.txt', 'utf8')
const lines = text.split("\n")

let zero_counter = 0

let pointer = 50

lines.forEach(element => {
    let direction = element.charAt(0)
    let number = parseInt(element.substring(1))

    let rotations = 0
    if(direction === 'R'){
        rotations = Math.floor((pointer+number) / 100)
        pointer = (pointer+number) % 100
    }else{
        let subTotal = pointer - number
        if(number >= pointer && pointer !== 0) rotations++ //To check initial rotaion and not if pointer is already 0
        subTotal = Math.abs(subTotal)
        rotations+= Math.floor((subTotal) / 100)

        pointer = (pointer-number+1000000) % 100 //add a large number to ensure that pointer is positive.
    }

    //console.log(rotations);
    

    zero_counter+= rotations
});

console.log("Counter: ", zero_counter);


