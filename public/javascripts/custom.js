// //Punit's original
// var markdownContent = document.getElementById('flex-markdown').innerHTML
// document.getElementById('flex-preview').innerHTML =
//      marked(markdownContent);

// //this version substitutes 'flex-markdown-input' for 'flex-markdown'
var markdownContent = document.getElementById('markdown-textarea').value
document.getElementById('flex-preview').innerHTML = marked(markdownContent);

