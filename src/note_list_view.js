(function(exports) {

  function NoteListView(noteList = new NoteList()) {
  this.noteList = noteList
  }

  NoteListView.prototype.printHTML = function() {
    var list = '<ul>'
    if (this.noteList.list.length != 0) {
      for ( i = 0; i < this.noteList.list.length; i++) {
         list += '<li><div>' + this.noteList.list[i].showText() + '</div></li>';
      }
      return list + '</ul>'
    } else {
      return 'Note list is empty'
    }
  };



  exports.NoteListView = NoteListView;
})(this);
