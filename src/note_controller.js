(function(exports) {


  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.createNote = function (string) {
    this.noteList.createNote(string);
  };

  NoteController.prototype.getHTML = function (elementDiv) {
     elementDiv.innerHTML = this.noteListView.printHTML();
  };

  NoteController.prototype.getHTMLForSingleNote = function (note, elementDiv) {
     var view = new SingleNoteView(note);
     return elementDiv.innerHTML = view.printHTML();
  };

  exports.NoteController = NoteController;

})(this);
