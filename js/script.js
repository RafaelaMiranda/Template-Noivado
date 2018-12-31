var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img");
var captionText = document.getElementById("caption");

function myFunc(el){
    var imgSrc = el.src;
    var altText = el.alt;
    modal.style.display = "block";
    modalImg.src = imgSrc;
    captionText.innerHTML = altText;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
  modal.style.display = "none";
}
