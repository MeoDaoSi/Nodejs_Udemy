const fs = require('fs');
// const book = {
//     title: 'Book for new bi',
//     author: 'Tinh sama'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON );

// const dataBuffer = fs.readFileSync('1-json.json')

// console.log(dataBuffer.toString());

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'Tinhle';
data.age = '20';

const newJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json',newJSON);

console.log(data);