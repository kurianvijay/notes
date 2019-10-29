(function (exports) {

  function NoteController(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel
    this.noteListView = new NoteListView(noteListModel)
  };

  NoteController.prototype.renderHTML = function() {
    var element = document.getElementById("app")
    return element.innerHTML = this.noteListView.viewNoteListHTML()
    // return element.innerHTML
  };

  exports.NoteController = NoteController;
})(this);
