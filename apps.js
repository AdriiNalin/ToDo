const fs = require('fs');

// Funktion zum Hinzufügen einer neuen Notiz
function addNote(note) {
    fs.appendFileSync('notes.txt', note + '\n');
    console.log('Die Notiz wurde erfolgreich hinzugefügt.');
}

// Funktion zum Anzeigen aller gespeicherten Notizen
function showNotes() {
    const notes = fs.readFileSync('notes.txt', 'utf8');
    console.log('Gespeicherte Notizen:');
    console.log(notes);
}

// Funktion zum Löschen einer bestimmten Notiz
function deleteNote(note) {
    let notes = fs.readFileSync('notes.txt', 'utf8');
    notes = notes.replace(note + '\n', '');
    fs.writeFileSync('notes.txt', notes);
    console.log('Die Notiz wurde erfolgreich gelöscht.');
}


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Was möchten Sie tun? (add/show/delete) ', (answer) => {
    if (answer === 'add') {
        rl.question('Geben Sie die Notiz ein: ', (note) => {
            addNote(note);
            rl.close();
        });
    } else if (answer === 'show') {
        showNotes();
        rl.close();
    } else if (answer === 'delete') {
        rl.question('Geben Sie die Notiz zum Löschen ein: ', (note) => {
            deleteNote(note);
            rl.close();
        });
    } else {
        console.log('Ungültige Eingabe.');
        rl.close();
    }
});
