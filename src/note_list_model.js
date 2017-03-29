(function(exports) {

  function NoteList() {
    this.list = [];
  }


  NoteList.prototype.printList = function() {
  if (this.list.length != 0) {
    for ( i = 0; i < this.list.length; i++) {
      return this.list[i].showText();
    }
  } else {
    return 'Note list is empty'
  }
  };

NoteList.prototype.createNote = function(string) {
  var note = new Note(string);
  this.list.push(note);
};

  exports.NoteList = NoteList;

})(this);
