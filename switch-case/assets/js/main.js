const data = new Date('2024-10-17 00:00:00')
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
  case 0:
    diaSemanaTexto = 'Domingo';
    break
  case 1:
    diaSemanaTexto = 'Domingo';
    break
  case 2:
    diaSemanaTexto = 'Terça';
    break
  case 3:
    diaSemanaTexto = 'Quarta-feira';
    break
  case 4:
    diaSemanaTexto = 'Quinta-feira';
    break
  case 5:
    diaSemanaTexto = 'Sexta-feira';
    break
  case 6:
    diaSemanaTexto = 'Sabado';
    break

}

console.log(diaSemana, diaSemanaTexto);
