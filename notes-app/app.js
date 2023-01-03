const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk'); 
const notes = require('./notes.js');

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
        notes.addNote(argv.title,argv.body);
    }
})
// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: String,
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
// Remove add command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: String,
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})
// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler(argv){
        notes.listNotes()
    }
})

yargs.parse();