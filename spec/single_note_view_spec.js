function checkSingleNoteViewExists() {

try {
  new assert(SingleNoteView, "not defined", "checkSingleNoteViewExists").isDefined();
}
  catch(err) {
    console.log(err.message);
  }
}


function checkSingleNoteIsDisplayedAsHTML() {
  var note = new Note('test note');
  noteView = new SingleNoteView(note);

  try {
    new assert(noteView.printHTML() === '<div>Favourite drink: seltzer</div>', "HTML string not printed", "checkSingleNoteIsDisplayedAsHTML").isTrue();
  }
  catch(err) {
    console.log(err.message);
  }
}

checkSingleNoteViewExists();
checkSingleNoteIsDisplayedAsHTML();
