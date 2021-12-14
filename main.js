const hamburgerIcon = document.querySelector("foo");

if (hamburgerIcon != null) {
  hamburgerIcon.addEventListener("click", function () {
    console.log("Hey you clicked me!");
  });
  console.log("null value");
}
