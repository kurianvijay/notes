function testViewTwoNoteListHTML(){
  var note1 = new Note("hello Jay, how the bloddy hell are you??")
  var note2 = new Note("goodbye")
  var noteList = new NoteList()

  noteList.createNote(note1)
  noteList.createNote(note2)
  // console.log("notelist--",noteList)

  var noteListView = new NoteListView(noteList)
  // console.log("-----", noteListView)
  // console.log("view HTML---", noteListView.viewNoteListHTML())

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div>hello Jay, how the </div></li><li><div>goodbye</div></li></ul>" )
}

function testViewOneNoteListHTML(){
  var note1 = new Note("hello Jay")
  var noteList = new NoteList()
  noteList.createNote(note1)
  var noteListView = new NoteListView(noteList)

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div>hello Jay</div></li></ul>" )
}

function testViewZeroNoteListHTML(){
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList)

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div></div></li></ul>" )
}

function testNoteListHTMLCHARLimit(){
  var note = new Note("hello Jay, how the bloddy hell are you??")
  var noteList = new NoteList()
  noteList.createNote(note)
  var noteListView = new NoteListView(noteList)

  // var result = noteListView.viewNoteListHTML()
  // console.log("result---", result)

  assert.isEqual(noteListView.viewNoteListHTML() === "<ul><li><div>hello Jay, how the </div></li></ul>" )
  console.log("20 CHAR passing")
}

testViewTwoNoteListHTML();
testViewOneNoteListHTML();
testViewZeroNoteListHTML();
testNoteListHTMLCHARLimit();
