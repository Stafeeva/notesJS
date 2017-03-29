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

checkNoteListViewExists();
