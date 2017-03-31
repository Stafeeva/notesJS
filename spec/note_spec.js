function  checkNoteExists() {
  var note = new Note("hello");

    try {
      new assert(note , "not defined", "checkNoteExists").isDefined()
    }
    catch(err) {
      console.log(err.message)
    }
};

function  checkNoteIsString() {
  var note = new Note("hello");

    try {
      new assert(note.showText() , "not a string", "checkNoteIsString").isDefined()
    }
    catch(err) {
      console.log(err.message)
    }
};

function  checkTextInputIsStored() {
  var note = new Note("hello");

    try {
      new assert(note.text === "hello", "not true", "checkTextInputIsStored").isTrue()
    }
    catch(err) {
      console.log(err.message)
    }
};

function  checkIdIsStored() {
  var note = new Note("hello", 1);

    try {
      new assert(note.id === 1, "not true", "checkIdIsStored").isTrue()
    }
    catch(err) {
      console.log(err.message)
    }
};

function checkTextInputIsPrinted() {
  var note = new Note("roar");

  try {
    new assert(note.showText() === "roar", "not true", "checkTextInputIsPrinted").isTrue()
  }
  catch(err) {
    console.log(err.message)
  }
};

function checkNoteIs20Characters(){
  var note = new Note("Roar goes the lion, baa goes the sheep, meow goes the cat ");

  try{
    new assert (note.showText().length === 20, "not 20", "checkNoteIs20Characters").isTrue()
    }
    catch(err) {
      console.log(err.message)
    }
};


checkNoteExists();
checkNoteIsString();
checkTextInputIsStored();
checkIdIsStored()
checkTextInputIsPrinted();
checkNoteIs20Characters();
