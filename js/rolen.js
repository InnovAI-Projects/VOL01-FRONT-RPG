const entrada = document.getElementById("Dice");
const botao = document.getElementById("Roll");
const resultado = document.getElementById("Result");

botao.addEventListener("click", function () {
  const valor = entrada.value.trim();
  const formato = /^(\d{1,3})d(\d{1,3})([+-]\d+)?$/;
  // = [^] Começa a linha ([\d] = 3 digitos que podem ir de 0 a 9)
  //[d] = D de dadomesmo ([\d] = 3 digitos que podem ir de 0 a 9))
  // A \ procura um + [\d+] = quer dizer que pode aceitar 1 ou mais numeros.
  // [+-] = quer dizer que pode aceitar + ou -.
  // ? = Quer dizer que pode ter ou não.
  const partes = valor.match(formato);

  if (!partes) {
    resultado.textContent =
      "Formato inválido. Use o formato XdY+Z, todos os numeros tem, que ser positivos";
    return;
  }

  const quantidade = parseInt(partes[1], 10);
  const lados = parseInt(partes[2], 10);
  let bonus = 0;

  if (partes[3]) {
    bonus = parseInt(partes[3].replace("+", ""));
  }

  if (quantidade < 1 || quantidade > 100) {
    resultado.textContent = "Quantidade de dados inválida.";
    return;
  }

  if (lados < 2 || lados > 100) {
    resultado.textContent = "Quantidade de lados inválida.";
    return;
  }

  let soma = 0;
  let resultados = [];

  for (let i = 0; i < quantidade; i++) {
    let dado = Math.floor(Math.random() * lados) + 1;
    resultados.push(dado);
    soma += dado;
  }

  soma += bonus;

  resultado.innerHTML = `
    Dados: ${resultados.join(", ")}<br>
    Bônus: ${bonus}<br>
    Total: ${soma}
    `;
});
