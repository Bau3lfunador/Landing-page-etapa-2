const fechaEvento = new Date("Dec 31, 2025 23:59:59").getTime();
setInterval(function(){
  const ahora = new Date().getTime();
  const distancia = fechaEvento - ahora;
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  document.getElementById("dias").innerText = dias;
  document.getElementById("horas").innerText = horas;
  document.getElementById("minutos").innerText = minutos;
  document.getElementById("segundos").innerText = segundos;
}, 1000);

document.querySelectorAll(".faq h3").forEach(pregunta => {
  pregunta.addEventListener("click", () => {
    const respuesta = pregunta.nextElementSibling;
    respuesta.style.display = respuesta.style.display === "block" ? "none" : "block";
  });
});

function enviar() {
  const email = document.getElementById("email").value;
  if(email.trim() === "") {
    alert("Por favor ingrese un correo válido");
  } else {
    alert("Gracias por suscribirte: " + email);
  }
}