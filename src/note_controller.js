(function(exports) {

  function NoteController(noteList) {
    noteList.createNote("Favourite drink: seltzer");
    var noteListView = new NoteListView(noteList);

   NoteController.prototype.getHTML = function () {
     document.getElementById('app').innerHTML = noteListView.printHTML();
   };
  }
  exports.NoteController = NoteController;
})(this);
