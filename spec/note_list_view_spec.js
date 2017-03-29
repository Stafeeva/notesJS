function  checkNoteListViewExists() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

    try {
      new assert(noteListView , "not defined", "checkNoteListViewExists").isDefined();
    }
    catch(err) {
      console.log(err.message);
    }
}

function checkNoteListViewPrintsHTML() {
  var note1 = new Note('Hello');
  var note2 = new Note('Hello again');
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  try {
    new assert(noteListView.printHTML() == '<ul><li><div>Hello</div></li><li><div>Hello again</div></li></ul>'  , "HTML string not printed", "checkNoteListViewPrintsHTML").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }

}


checkNoteListViewExists();
checkNoteListViewPrintsHTML();
