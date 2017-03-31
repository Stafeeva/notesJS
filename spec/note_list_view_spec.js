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

function checkNoteListViewPrintsHTMLWithLinks() {
  var noteList = new NoteList();
  noteList.createNote('Hello');
  noteList.createNote('Hello again');
  var noteListView = new NoteListView(noteList);

  try {
    new assert(noteListView.printHTML() == "<ul><li><a href='#notes/1'>Hello</a></li><li><a href='#notes/2'>Hello again</a></li></ul>", "HTML string not printed", "checkNoteListViewPrintsHTMLWithLinks").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }

}


checkNoteListViewExists();
checkNoteListViewPrintsHTMLWithLinks();
