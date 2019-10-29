function Note(text) {
  this.text = text;
}

Note.prototype.viewText = function() {
  return this.text
}
