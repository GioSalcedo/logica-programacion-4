const inputNumber = document.getElementById("input-number");
const btnSubmit = document.getElementById("btn-submit");
const resultElement = document.getElementById("result");

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  
  const number = parseInt(inputNumber.value);
  if (isNaN(number) || number < 1) {
    resultElement.textContent = "Por favor, ingrese un número válido.";
    return;
  }

  const fibonacciSequence = generateFibonacci(number);
  resultElement.textContent = `Secuencia Fibonacci: ${fibonacciSequence.join(', ')}`;
});

function generateFibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}
