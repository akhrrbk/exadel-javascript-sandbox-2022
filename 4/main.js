const fs = require('fs')
const func1 = require('./script1')

async function Hello(){
    try {
        const data = fs.readFileSync('./input.txt', 'utf8')
        const result = await func1(data)
    
        fs.writeFile('./output.txt', result, error => {
            if(error){
                console.error(error)
            }
            console.log('successful');
        })
    
    } catch (error) {
        console.error(error)
    }
}

Hello()