async function buscarDados() {
  const resposta = await fetch("https://api.exemplo.com/dados");
  const dados = await resposta.json();
  return dados;
}
