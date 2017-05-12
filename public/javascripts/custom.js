document.getElementById('flex-markdown-input').addEventListener('keyup', function() {
  var markdownContent = document.getElementById('flex-markdown-input').value || ''
  console.log('markdownContent::', markdownContent);
  document.getElementById('flex-preview').innerHTML =
       marked(markdownContent);
})

MSFileSaver