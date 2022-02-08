let countA = 0
let countO = 0
let content = 'Hello my name is Ola'

const myfunc = (data) => {
    for (let i = 0; i < data.length ; i++) {
        console.log(`logging i -> ${data[i]}`);
        if (data[i] === 'a' || data[i] === 'A') {
           countA += 1;
        } else if (data[i] === 'o' || data[i] === 'O') {
            countO += 1;
         }
    }

    console.log(`A - ${countA}`);
    console.log(`O - ${countO}`);
}