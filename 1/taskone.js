const fs = require('fs')

let content = 'null'

try {
    const data = fs.readFileSync('./input.txt', 'utf8')
    const number = Number(data)

    for (let i = 2; i < number - 1 ; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        content = 'true'
    } else {
        content = 'false'
    }

    fs.writeFile('./output.txt', content, error => {
        if(error){
            console.error(error)
        }
        console.log('successful');
    })

} catch (error) {
    console.error(error)
}