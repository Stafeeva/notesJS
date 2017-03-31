function  checkControllerExists() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);

  try {
    new assert(noteController , "Doesn't exist", "checkControllerExists").isDefined();
  }
  catch(err) {
    console.log(err.message);
  }
}

function  checkControllerCanPrintHTML() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  var noteController = new NoteController(noteList);
  var elementDiv = function() {
    this.innerHTML = ''
  };
  noteController.getHTML(elementDiv);
  try {
    new assert( elementDiv.innerHTML === "<ul><li><a href='#notes/1'>Favourite drink: sel</a></li></ul>" , "Can't print HTML", "checkControllerCanPrintHTML").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}
checkControllerExists();
checkControllerCanPrintHTML();
