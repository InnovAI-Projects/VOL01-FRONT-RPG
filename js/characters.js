function mensage(mensagem) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = mensagem;
}

const personagens = [
  {
    nome: "Cascata",
    descricao: "Um isekai onde todos do planeta foram para um novo mundo...",
    sistema: "Derivado de HxH 5e com modificações do mestre",
    campanha: "Cascata",
  },
  {
    nome: "3 lados de um triângulo",
    descricao: "Um RPG de Jujutsu...",
    sistema: "F&M",
    campanha: "3 lados de um triângulo",
  },
];

const form = document.getElementById("form");

function renderTable() {
  const table = document.getElementById("characterTable");
  table.innerHTML = "";
  personagens.forEach(function (personagem) {
    const linha = document.createElement("tr");

    const tdNome = document.createElement("td");
    const tdDescricao = document.createElement("td");
    const tdSistema = document.createElement("td");
    const tdPressonagen = document.createElement("td");
    const tdAcoes = document.createElement("td");

    tdNome.textContent = personagem.nome;
    tdDescricao.textContent = personagem.descricao;
    tdSistema.textContent = personagem.sistema;
    tdPressonagen.textContent = personagem.campanha;

    const divActions = document.createElement("div");
    divActions.className = "actions";

    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-editar";
    btnEditar.type = "button";

    const btnExcluir = document.createElement("button");
    btnExcluir.textContent = "Excluir";
    btnExcluir.className = "btn-excluir";
    btnExcluir.type = "button";

    divActions.appendChild(btnEditar);
    divActions.appendChild(btnExcluir);

    tdAcoes.appendChild(divActions);

    linha.appendChild(tdNome);
    linha.appendChild(tdDescricao);
    linha.appendChild(tdSistema);
    linha.appendChild(tdPressonagen);
    linha.appendChild(tdAcoes);

    table.appendChild(linha);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim(); // .value.trim() remove os espaços em brando do inicio e do final.
  const description = document.getElementById("description").value.trim();
  const sistema = document.getElementById("system").value.trim();
  const campanha = document.getElementById("campaign").value.trim();

  if (name === "" || description === "" || sistema === "" || campanha === "") {
    mensage("Por favor, preencha todos os campos.");
    return;
  }
  const personagem = {
    nome: name,
    descricao: description,
    sistema: sistema,
    campanha: campanha,
  };

  personagens.push(personagem);

  renderTable();

  mensage("Salvo com sucesso!");
  form.reset();
});
renderTable();
