var form = document.getElementById("modal");
var close = document.getElementById("close");

var btn = document.getElementById("topbtn");
window.onscroll = function() {scrollFunction()};

// Show top button after scrolling
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

// Go to top of the form
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Open contact form
function openForm() {
	form.style.display = "block";
}

// Close form
function closeForm() {
	form.style.display = "none";
}

// Close if clicked out
window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
  }
}