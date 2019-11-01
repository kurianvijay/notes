// var element = document.getElementById("app")
// element.innerHTML = "Howdy"

(function (exports) {

  function NoteController(noteListModel = new NoteList()) {
    this.noteListModel = noteListModel
    this.noteListView = new NoteListView(noteListModel)


    function makesURLChangeShowNoteForCurrentPage() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    };

    function showNoteForCurrentPage() {
      showNote(getNoteFromUrl(window.location));
    };

    function getNoteFromUrl() {
      return location.hash.split("#")[1];
    };

    function showNote(note) {
      document
      .getElementById("notebook")
      .innerHTML = notebook;
    };

    makesURLChangeShowNoteForCurrentPage();

  };


  NoteController.prototype.renderHTML = function(doc = document) {
    var element = doc.getElementById("app")

    return element.innerHTML = this.noteListView.viewNoteListHTML()

  };

  exports.NoteController = NoteController;
})(this);
