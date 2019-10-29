
function testviewText() {
  var note = new Note("hello");
  assert.isEqual(note.viewText() === "hello" )
}

testviewText();
