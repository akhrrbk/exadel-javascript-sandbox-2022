const fs = require('fs')

let previous, current
let actualCount = 0
// let content = '158,164,742,99,155,250,240,87'
let data = []
let number = ''
let output = '0'

try {
    const content = fs.readFileSync('./input.txt', 'utf8')

    // removing commas
    for(let i = 0; i < content.length; i++){
        if(content[i] !== ','){
            number = number.concat(content[i])
        } else{
            data.push(number)
            number = ''
        }
    }

    // counting increase
    for(let y = 1; y < data.length; y++){
        previous = data[y-1]
        current = data[y]
        if(current > previous){
            actualCount += 1;
        }
    }

    if(actualCount > 0){
        output = `${actualCount}`
    }

    fs.writeFile('./output.txt', output, error => {
        if(error){
            console.error(error)
        }
        console.log('successful');
    })

} catch (error) {
    console.error(error)
}
