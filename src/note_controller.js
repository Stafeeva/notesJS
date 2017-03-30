(function(exports) {


  function NoteController(noteList) {
    noteList.createNote("Favourite drink: seltzer");
    this.noteListView = new NoteListView(noteList);
  }

   NoteController.prototype.getHTML = function (noteListView) {
     document.getElementById('app').innerHTML = this.noteListView.printHTML();
   };

   exports.NoteController = NoteController;

})(this);
