(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.printHTML = function () {
    return  '<div>' + this.note.showText() + '</div>'
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
