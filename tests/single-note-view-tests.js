
  function testSingleNoteView() {

    var note1 = new Note("Favourite drink: seltzer")
    var singleNote = new SingleNoteView(note1);
    assert.isEqual(singleNote.viewHTML() === "<ul><li><div>Favourite drink: seltzer</div></li></ul>" )
    console.log("SingleNoteView test passing")
  }

  testSingleNoteView();
