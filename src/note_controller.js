(function(exports) {


  function NoteController(noteList) {
    noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

   NoteController.prototype.getHTML = function (elementDiv) {
     elementDiv.innerHTML = this.noteListView.printHTML();
   };
   exports.NoteController = NoteController;

})(this);
