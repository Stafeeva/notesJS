(function(exports) {


  function NoteController(noteList) {
    note = noteList.createNote("Favourite drink: seltzer");
    noteListView = new NoteListView(notelist);

   NoteController.prototype.getHTML = function (noteListView) {
     document.getElementById('app').innerHTML = noteListView;
   };


  }
})(this);
