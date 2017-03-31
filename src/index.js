
var controller = (new NoteController(new NoteList()))

controller.createNote("To do: buy eggs, milk, bread")
controller.createNote("Remember to book cinema tickets!")
controller.createNote("Doctors appointment today at 3pm")

controller.getHTML((document.getElementById('app')));
controller.makeUrlChangeShowNote();
