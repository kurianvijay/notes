// function testCreate() {
//   var note = new Note();
//   assert.isTrue(note.create("hello") = "hello")
// }

function testviewText() {
  var note = new Note("hello");
  assert.isEqual(note.viewText() === "hello" )
}

testviewText();
