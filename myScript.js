function scrollToBoth() {
  document.getElementById("logo-and-navbar").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.getElementById("Hero").scrollIntoView({ behavior: "smooth" });
  });
}