function  checkNoteListExists() {
  var noteList = new NoteList();

    try {
      new assert(noteList , "not defined", "checkNoteListExists").isDefined();
    }
    catch(err) {
      console.log(err.message);
    }
}

function  checkNoteListIsArray() {
  var noteList = new NoteList();

    try {
      new assert(Array.isArray(noteList.list) , "not an array", "checkNoteListIsArray").isTrue();
    }
    catch(err) {
      console.log(err.message);
    }
}

function checkNotesAreStored() {
  var noteList = new NoteList();
  var note = new Note("Roar");
  noteList.list.push(note);

    try {
      new assert(noteList.list[0].showText() == "Roar", "note not stored", "checkNotesAreStored").isTrue();
    }
    catch(err) {
      console.log(err.message);
    }
}


function checkNoteListCanBePrinted() {
    var noteList = new NoteList();
    var note = new Note("Roar");
    noteList.list.push(note);

    try {
      new assert(noteList.printList() == "Roar", "notes not printed", "checkNoteListCanBePrinted").isTrue();
    }
    catch(err) {
      console.log(err.message);
    }
}

checkNoteListExists();
checkNoteListIsArray();
checkNotesAreStored();
checkNoteListCanBePrinted();
