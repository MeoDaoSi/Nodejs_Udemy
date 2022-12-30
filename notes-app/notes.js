const fs = require('fs');

const getNotes = function(){
    return 'Your notes...'
}

const addNote = function( title, body){
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

const saveNote = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = function(){
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
    addNote
}

