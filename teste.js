// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}
console.log("SOMA: ", SOMA);

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
function isFibonacci(num) {
    let a = 0, b = 1, next = a + b;
    
    if (num === 0 || num === 1) return true;
  
    while (next <= num) {
      if (next === num) return true;
      a = b;
      b = next;
      next = a + b;
    }
  
    return false;
  }
  
  const inputNumber = 21; // Altere o número para testar outros casos
  console.log(`O número ${inputNumber} pertence à sequência?`, isFibonacci(inputNumber));
// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const faturamentoDiario = [0, 1500, 1700, 0, 0, 2000, 1800]; // Exemplo de vetor

function calcularEstatisticas(faturamento) {
  const diasUteis = faturamento.filter(valor => valor > 0);
  const menorValor = Math.min(...diasUteis);
  const maiorValor = Math.max(...diasUteis);
  const mediaMensal = diasUteis.reduce((a, b) => a + b, 0) / diasUteis.length;
  const diasAcimaDaMedia = diasUteis.filter(valor => valor > mediaMensal).length;

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}

const { menorValor, maiorValor, diasAcimaDaMedia } = calcularEstatisticas(faturamentoDiario);
console.log(`Menor valor: R$${menorValor}, Maior valor: R$${maiorValor}, Dias acima da média: ${diasAcimaDaMedia}`);

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);
  
  for (let estado in faturamentoEstados) {
    const percentual = ((faturamentoEstados[estado] / totalFaturamento) * 100).toFixed(2);
    console.log(`Estado: ${estado}, Percentual: ${percentual}%`);
  }
  
// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;
function inverterString(str) {
    let resultado = "";
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    return resultado;
  }
  
  const texto = "Feliz ano novo!";
  console.log("Texto invertido:", inverterString(texto));
  