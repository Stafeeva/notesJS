(function(exports) {

  function Note(string){
    this.text = string
  };

  exports.Note = Note;

})(this);

Note.prototype.showText = function() {
  return this.text;
};
