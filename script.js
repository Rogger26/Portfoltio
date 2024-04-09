document.querySelector(".flecha").addEventListener("click", function (e) {
  e.preventDefault(); // Evita que el enlace funcione como un enlace normal
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Desplazamiento suave
  });
});

window.addEventListener("scroll",function(){
  var nav = document.querySelector("nav");
  nav.classList.toggle("abajo",window.scrollY>0);
})
