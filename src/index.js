
var controller = (new NoteController(new NoteList()))

controller.createNote("hello")

controller.getHTML((document.getElementById('app')));
