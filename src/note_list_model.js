(function(exports) {

  function NoteList() {
    this.list = [];
  }


  NoteList.prototype.printList = function() {
// if length is not equal to 0 do this
    for ( i = 0; i < this.list.length; i++) {
      return this.list[i].showText();
      console.log(this.list[i].showText());

    }
  };

NoteList.prototype.createNote = function(string) {
  var note = new Note(string);
  this.list.push(note);
};

  exports.NoteList = NoteList;

})(this);
