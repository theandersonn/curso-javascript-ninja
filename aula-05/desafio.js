/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var teste1 = [
  "cebola",
  35,
  { nome: "anderson" },
  function () {
    return "olá mundo!";
  },
  7.8,
];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var numeros = [15, 28, 32];

function teste2(param) {
  return param;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
teste2(numeros)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var numerosPares = [2, 4, 6, 8];

function teste3(arr, indice) {
  return arr[indice];
}

teste3(numerosPares, 1);

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valoresAleatorios = ["teste", 58, { nome: "anderson" }, true, "35"];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
teste3(valoresAleatorios, 0);
teste3(valoresAleatorios, 1);
teste3(valoresAleatorios, 2);
teste3(valoresAleatorios, 3);
teste3(valoresAleatorios, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro) {
  var livros = {
    "A Startup de $100": {
      quantidadePaginas: 240,
      autor: "Chris Guillebeau",
      editora: "nome da editora",
    },
    "Código Limpo": {
      quantidadePaginas: 456,
      autor: "Robert C. Martin",
      editora: "Alta Books",
    },
    "Como ser um Programador Melhor": {
      quantidadePaginas: 384,
      autor: "Pete Goodliffe",
      editora: "Novatec",
    },
  };

  return !nomeLivro ? livros : livros[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeLivro = "Como ser um Programador Melhor";

"O livro " +
  nomeLivro +
  " tem " +
  book(nomeLivro).quantidadePaginas +
  " páginas!";

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro " + nomeLivro + " é " + book(nomeLivro).autor + ".";

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro livro " +
  nomeLivro +
  " foi publicado pela editora " +
  book(nomeLivro).editora +
  ".";
