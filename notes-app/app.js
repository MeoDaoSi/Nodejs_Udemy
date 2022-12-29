const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk'); 

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: String,
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type: String,
        }
    },
    handler(argv){
        console.log('Adding a new note!' , argv );
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler(){
        console.log('Reading a note!');
    }
})
// Remove add command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler(){
        console.log('Removing a new note!');
    }
})
// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(){
        console.log('Listing out all note');
    }
})

yargs.parse();