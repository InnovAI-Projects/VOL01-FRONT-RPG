function mensage(mensagem) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = mensagem;
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim(); // .value.trim() remove os espaços em brando do inicio e do final.
  const description = document.getElementById("description").value.trim();
  const sistema = document.getElementById("system").value.trim();

  if (name === "" || description === "" || sistema === "") {
    mensage("Por favor, preencha todos os campos.");
    return;
  }

  mensage("Salvo com sucesso!");
});
