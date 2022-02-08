const data = '{"a":1,"b":{"a":{"a":2,"b":[1,3],"c":{"a":-1}}},"c":0}'
const number = 0
const hello = () => {
    try {
        const data = fs.readFileSync('./input.txt', 'utf8')
        const data = JSON.stringify(data)
    

        for(let i = 0; i < data.length; i++){
            if(data[i] === ':'){
                if(data[i+1] !== '{'){
                    
                }
            }
        }

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

hello()

