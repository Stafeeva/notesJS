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
     elementDiv.innerHTML = view.printHTML();
  };

  NoteController.prototype.getNoteIdFromUrl = function (location) {
    return location.hash.split("/")[1];
  };

  NoteController.prototype.getNoteById = function (id) {
    return this.noteList.list[id - 1];
  };

  exports.NoteController = NoteController;

})(this);
