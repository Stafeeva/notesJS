(function(exports) {

  function NoteList() {
    this.list = [];
  }


  NoteList.prototype.printList = function() {

    for ( i = 0; i < this.list.length; i++) {
      return this.list[i].showText();
      console.log(this.list[i].showText());

      // note.showText();
    }
    // this.list.forEach(function(note) {
    // note.showText();

    // });
  };


  exports.NoteList = NoteList;

})(this);
