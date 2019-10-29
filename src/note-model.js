function Note(text) {
  this.text = text;
}

Note.prototype.viewText = function() {
  return this.text
}
// Note.prototype.create = function(note) {
//   this.notes.push(note);
//   return note;
// }
//
// Note.prototype.all = function() {
//   return this.notes;
// }
