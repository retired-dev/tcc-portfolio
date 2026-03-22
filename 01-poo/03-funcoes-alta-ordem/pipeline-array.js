const numeros = [1, 2, 3, 4, 5];

const resultado = numeros
  .filter(n => n % 2 === 0)
  .map(n => n * 10)
  .reduce((acc, n) => acc + n, 0);

console.log(resultado); // Retorna 60
