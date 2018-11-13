 function myFunction() {
  var x = document.getElementById("myDemo");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

var input = document.getElementById("msg", "name");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("button").click();
    }
});
