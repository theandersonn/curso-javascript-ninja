/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = "Campeonato Carioca";
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = ["botafogo", "flamengo", "fluminense", "vasco", "volta redonda"];
console.log("Times que estão participando do campeonato:", teams);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(arg) {
  // resolução 1
  // -----------
  //   if (!teams[arg - 1]) {
  //     return "Não temos a informação do time que está nessa posição.";
  //   }

  // resolução 2
  // -----------
  if (arg < 1 || arg > 5) {
    return "Não temos a informação do time que está nessa posição.";
  }

  return "O time que está em " + arg + "º lugar é o " + teams[arg - 1] + ".";
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); // O time que está em 1º lugar é o botafogo.
showTeamPosition(5); // O time que está em 5º lugar é o volta redonda
showTeamPosition(3); // O time que está em 3º lugar é o fluminense.
showTeamPosition(2); // O time que está em 2º lugar é o flamengo.
showTeamPosition(7); // Não temos a informação do time que está nessa posição.

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var contador = 20;

while (contador <= 30) {
  console.log(contador);
  contador++;
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor) {
  switch (cor) {
    case "azul":
      return "O hexadecimal para a cor " + cor + " é #0000FF.";
      break;

    case "rosa":
      return "O hexadecimal para a cor " + cor + " é #FFC0CB.";
      break;

    case "marrom":
      return "O hexadecimal para a cor " + cor + " é #800000.";
      break;

    case "vermelho":
      return "O hexadecimal para a cor " + cor + " é #FF0000	.";
      break;

    case "amarelo":
      return "O hexadecimal para a cor " + cor + " é #FFFF00.";
      break;

    default:
      return "Não temos o equivalente hexadecimal para " + cor + ".";
      break;
  }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("azul"); // O hexadecimal para a cor azul é #0000FF.
convertToHex("rosa"); // O hexadecimal para a cor rosa é #FFC0CB.
convertToHex("marrom"); // O hexadecimal para a cor marrom é #800000.
convertToHex("vermelho"); // O hexadecimal para a cor vermelho é #FF0000
convertToHex("amarelo"); // O hexadecimal para a cor amarelo é #FFFF00.
convertToHex("verde"); // Não temos o equivalente hexadecimal para verde.
convertToHex("preto"); // Não temos o equivalente hexadecimal para preto.
convertToHex("branco"); // Não temos o equivalente hexadecimal para branco.
