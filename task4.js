function displayWindowSize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    document.getElementById("widthValue").innerHTML = w;
    document.getElementById("heightValue").innerHTML = h;
  }
  window.addEventListener("resize", displayWindowSize);
  