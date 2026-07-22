const campanhas = [
  {
    nome: "Cascata",
    descricao: "Um isekai onde todos do planeta foram para um novo mundo...",
    sistema: "Derivado de HxH 5e com modificações do mestre",
  },
  {
    nome: "3 lados de um triângulo",
    descricao: "Um RPG de Jujutsu...",
    sistema: "F&M",
  },
];

const campanha = {
  nome,
  descricao,
  sistema,
};

campanhas.push(campanha);

function renderTable() {
  const table = document.getElementById("campaignTable");
  table.innerHTML = "";
  campanhas.forEach(function (campanha) {
    const linha = document.createElement("tr");

    const tdNome = document.createElement("td");
    const tdDescricao = document.createElement("td");
    const tdSistema = document.createElement("td");
    const tdAcoes = document.createElement("td");

    tdNome.textContent = campanha.nome;
    tdDescricao.textContent = campanha.descricao;
    tdSistema.textContent = campanha.sistema;

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
    linha.appendChild(tdAcoes);

    tabela.appendChild(linha);
  });
}
