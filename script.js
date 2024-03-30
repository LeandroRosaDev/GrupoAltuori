var abrirMenu = document.querySelector(".menuSeta");
var fecharMenu = document.querySelector(".menuFechar");
var navToSection = document.querySelectorAll(".menuLinks");

abrirMenu.addEventListener("click", () => {
  abrirMenu.style.display = "none";
  fecharMenu.style.display = "block";
  (document.querySelector(".menuResponsivo").style.width = "100%"),
    (document.querySelector(".menuSidebar").style.display = "flex");
});
fecharMenu.addEventListener("click", () => {
  fecharMenu.style.display = "none";
  abrirMenu.style.display = "block";
  (document.querySelector(".menuResponsivo").style.width = "0%"),
    (document.querySelector(".menuSidebar").style.display = "none");
});
navToSection.forEach(function (link) {
  link.addEventListener("click", () => {
    fecharMenu.style.display = "none";
    abrirMenu.style.display = "block";
    (document.querySelector(".menuResponsivo").style.width = "0%"),
      (document.querySelector(".menuSidebar").style.display = "none");
  });
});
