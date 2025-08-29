const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nama : ", (nama) => {
    rl.question("No. HP : ", (hp) => {
        const array = {nama, hp};
        const getFile = fs.readFileSync('./contacts.json', "utf8");
        const contacts = JSON.parse(getFile);

        contacts.push(array);

        fs.writeFileSync("./contacts.json", JSON.stringify(contacts));
    })
})