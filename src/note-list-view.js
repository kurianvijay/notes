(function(exports) {

  function NoteListView(noteListModel) {
    this.allNotes = noteListModel;
  }

  NoteListView.prototype.viewNoteListHTML = function() {
    var newNoteList = []

    oldNoteList = this.allNotes.notes

    for (let index = 0; index < oldNoteList.length; index++) {

      newNoteList.push((oldNoteList[index].text).substring(0,19))
      // console.log("X", oldNoteList[index].text.substring(0,19))
    }
    note = newNoteList.join("</div></li><li><div>")

    return "<ul><li><div>" + note + "</div></li></ul>"
  }

  exports.NoteListView = NoteListView;
})(this);
