const form = document.getElementById('formulario');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const peso = document.getElementById('weight').value;
  const altura = document.getElementById('height').value;

  const imc = (peso / (altura * altura)).toFixed(2);

  const valor = document.getElementById('value');
  let descricao = '';

  document.getElementById('infos').classList.remove('hidden');

  if (imc < 16) {
    descricao = 'Magreza grave';
  } else if (imc >= 16 && imc < 17) {
    descricao = 'Magreza moderada';
  } else if (imc >= 17 && imc < 18.5) {
    descricao = 'Magreza leve';
  } else if (imc >= 18.5 && imc < 25) {
    descricao = 'Peso normal';
  } else if (imc >= 25 && imc < 30) {
    descricao = 'Sobrepeso';
  } else if (imc >= 30 && imc < 35) {
    descricao = 'Obesidade Grau I';
  } else if (imc >= 35 && imc < 40) {
    descricao = 'Obesidade Grau II (severa)';
  } else {
    descricao = 'Obesidade Grau III (mórbida)';
  }
  

  valor.textContent = imc.replace('.', ',');
  document.getElementById('descricao').textContent = descricao;
});
