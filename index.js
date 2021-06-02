var myModal = document.getElementById('myModal')
var myInput = document.getElementById('email')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


function submitContact(){
  document.getElementById('contact-us-form').style.display = "none";
  document.getElementById('contact-us-done').style.display = "block";
}

function submitAnother(){
  document.getElementById('contact-us-form').style.display = "block";
  document.getElementById('contact-us-done').style.display = "none";
}

function translateCategory(dom){
  if(dom.innerText == 'Categories'){
    dom.innerText = 'Kategori';
  }else{
    dom.innerText = 'Categories';
  }
}

function translateContactUs(dom){
  if(dom.innerText == 'Contact Us'){
    dom.innerText = 'Kontak Kami';
  }else{
    dom.innerText = 'Contact Us';
  }
}

var quotes = document.getElementsByClassName('carousel-quotes');
[].forEach.call(quotes, function (quote) {
  quote.style.background = "rgba(0, 0, 0, 0.8) none repeat scroll 0% 0%";
  quote.onclick = function(){
    if(quote.style.background == "rgba(0, 0, 0, 0.8) none repeat scroll 0% 0%"){
      quote.style.background = "rgba(255,255,255,0.8) none repeat scroll 0% 0%";
      quote.style.color = "rgba(48,48,48)";
    }else{
      quote.style.background = "rgba(0, 0, 0, 0.8) none repeat scroll 0% 0%";
      quote.style.color = "#f4f4f4";
    }
  }
});