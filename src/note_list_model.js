(function(exports) {

  function NoteList() {
    this.list = [];
  }

  NoteList.prototype.printList = function() {
    for (var i = 0; i < this.list.length; i++) {
      this.list[i].showText();
    };
  };


  exports.NoteList = NoteList;

})(this);
