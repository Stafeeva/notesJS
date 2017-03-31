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
  noteController.createNote('Favourite drink: sel');
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

function  checkControllerCanDisplaySingleNote() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  var elementDiv = function() {};
  var note = new Note('Favourite drink: cola');
  noteController.getHTMLForSingleNote(note, elementDiv);
  try {
    new assert( elementDiv.innerHTML === "<div>Favourite drink: cola</div>" , "Can't display a note", "checkControllerCanDisplaySingleNote").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkCorrectIdLoadedFromUrl() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  function DummyLocation() {
    this.hash = "#notes/1";
  }
  var dummyLocation = new DummyLocation();
  try {
    new assert( noteController.getNoteIdFromUrl(dummyLocation) === "1" , "Can't get id", "checkControllerCanDisplaySingleNote").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkGetNoteById() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.createNote("Favourite drink: gin", 1);
  var note = noteController.noteList.list[0];
  try {
    new assert( noteController.getNoteById(1) === note , "Can't get note", "checkGetNoteById").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

function checkNoteCanBeDisplayedById() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  noteController.createNote("Favourite drink: gin", 1);
  var elementDiv = function() {
    this.innerHTML = ''
  };
  function DummyLocation() {
    this.hash = "#notes/1";
  }
  var dummyLocation = new DummyLocation();
  noteController.showNoteForCurrentUrl(dummyLocation, elementDiv);
  try {
    new assert( elementDiv.innerHTML === "<div>Favourite drink: gin</div>" , "Note is not displayed", "checkNoteCanBeDisplayedById").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}



checkControllerExists();
checkControllerCanPrintHTML();
checkControllerCanDisplaySingleNote();
checkCorrectIdLoadedFromUrl();
checkGetNoteById();
checkNoteCanBeDisplayedById();
