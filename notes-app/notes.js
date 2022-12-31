const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => 'Your notes...' ;


const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicate = notes.filter( note => note.title === title )

    if ( duplicate.length === 0 ){
        notes.push({
            title,
            body
        })
        saveNote(notes);
        console.log('New note added!');
    }else{
        console.log('Note title taken!');
    }
}

const removeNote = title => {
    const notes = loadNotes();

    const newNotes = notes.filter( note => note.title !== title )
    if ( notes.length > newNotes.length ){
        console.log(chalk.inverse.green('Note removed!'));
        saveNote(newNotes);
    }else{
        console.log(chalk.inverse.red('No notes found!'))
    }
    
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const saveNote = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes
}

