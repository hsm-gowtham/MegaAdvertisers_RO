window.onload = function(){ 
var node = document.getElementById('my-node');
var btn = document.getElementById('foo');

btn.onclick = function() {
  
// node.innerHTML = "I'm an image now."
  domtoimage.toBlob(document.getElementById('my-node'))
    .then(function(blob) {
      window.saveAs(blob, 'my-node.png');
    });
}


    
};

