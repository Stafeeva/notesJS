(function(exports) {

  function Note(string, id){
    this.text = string;
    this.id = id;
  };

  exports.Note = Note;

})(this);

Note.prototype.showText = function() {
  return this.text;
};
