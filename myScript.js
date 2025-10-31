function scrollToBoth() {
  document.getElementById("logo-and-navbar").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document.getElementById("Hero").scrollIntoView({ behavior: "smooth" });
  }, 1000);
}

 document.getElementById("scrollToEnd").addEventListener("click", function(event) {
      event.preventDefault();
      const section = document.getElementById("about");
      const sectionBottom = section.offsetTop + section.offsetHeight;

      window.scrollTo({
        top: sectionBottom,
        behavior: "smooth" // makes the scroll smooth
      });
    });