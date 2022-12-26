const fs = require('fs');

fs.writeFileSync('notes.txt','My name Tinh.');
fs.appendFileSync('notes.txt',' Append new massage');