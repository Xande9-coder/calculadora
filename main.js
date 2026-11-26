const operadores = [
  "somar", 
  "subtrair",
  "multiplicar",
  "dividir",
  "exponenciacao",
  "raiz",
  "sin",
  "cos",
  "tg",
  "porcentagem"
];

const operacao = prompt(
  "Escolha a operação Exatamente como esá escrita: " + operadores.join(", ")
)?.trim().toLowerCase();

if (!operadores.includes(operacao)) {
  alert("Erro: digite apenas uma das operações indicadas.");
} else {
  const n1 = Number(prompt("Digite o primeiro número (ou ângulo em graus):"));
  const precisaDeN2 = !["sin", "cos", "tg"].includes(operacao);
  const n2 = precisaDeN2
    ? Number(prompt(operacao === "raiz" ? "Digite o índice da raiz (ex.: 2 para quadrada):" : "Digite o segundo número:"))
    : 0;

  if (Number.isNaN(n1) || (precisaDeN2 && Number.isNaN(n2))) {
    alert("Erro: digite apenas números válidos.");
  } else {
    const resultado = calcular(n1, n2, operacao);
    console.log("Resultado é:", resultado);
    alert(`Resultado: ${resultado}`);
  }
}

function calcular(n1, n2, operacao) {
  const rad = n1 * (Math.PI / 180);

  switch (operacao) {
    case "somar":
      return n1 + n2;
    case "subtrair":
      return n1 - n2;
    case "multiplicar":
      return n1 * n2;
    case "dividir":
      return n2 === 0 ? "Erro: divisão por zero." : n1 / n2;
    case "exponenciacao":
      return n1 ** n2;
    case "raiz":
      if (n2 === 0) return "Erro: índice da raiz não pode ser zero.";
      if (n1 < 0 && n2 % 2 === 0) return "Erro: raiz de índice par de número negativo.";
      return Math.pow(n1, 1 / n2);
    case "sin":
      return Math.sin(rad);
    case "cos":
      return Math.cos(rad);
    case "tg":
      return Math.abs(n1 % 180) === 90 ? "Erro: tangente indefinida para esse ângulo." : Math.tan(rad);
    case "porcentagem":
      return (n1 * n2) / 100;
    default:
      return "Erro: operação inválida.";
  }
}