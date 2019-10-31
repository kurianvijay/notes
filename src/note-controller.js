// var element = document.getElementById("app")
// element.innerHTML = "Howdy"

(function (exports) {

  function NoteController(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel
    this.noteListView = new NoteListView(noteListModel)
  };

  NoteController.prototype.renderHTML = function(doc = document) {
    var element = doc.getElementById("app")

    return element.innerHTML = this.noteListView.viewNoteListHTML()
    
  };

  exports.NoteController = NoteController;
})(this);
