(function (exports) {
// function testNoteControllerInsatiated

  function innerHTML() {

    var elementDouble = {
      innerHTML: "double"
    }

    var documentDouble = {
      getElementById: function() {
        return elementDouble
      }
    }

    note_list = new NoteList;
    note1 = note_list.createNote("Favourite drink: seltzer");

    controller = new NoteController(note_list)
    // console.log("cont", controller.renderHTML(documentDouble))

    assert.isEqual(controller.renderHTML(documentDouble)) === ("<ul><li><div>Favourite drink: seltzer</div></li></ul>")

    console.log('innerHTMLtest passed')
  }
  exports.innerHTML = innerHTML;

})(this)

innerHTML();
