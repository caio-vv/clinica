let consulta = {
  nome: "",
  medico: "",
  data: "",
  hora: "",
  cancelada: false,
};
let consultas = [];
let opcao = 0;

console.log("digite 1 para adicionar a consulta e insira seu nome");

process.stdin.on("data", function (data) {
  entrada = data.toString().trim().toLowerCase();

  if (!opcao) {
    opcao = Number(entrada);
  } else {
    if (opcao == 1) {
      if (!consulta.nome) {
        consulta.nome = entrada;
        console.log("digite o medico");
      } else if (!consulta.medico) {
        consulta.medico = entrada;
        console.log("digite a data");
      } else if (!consulta.data) {
        consulta.data = entrada;
        console.log("digite a hora");
      } else if (!consulta.hora) {
        consulta.hora = entrada;
        consultas.push(consulta);
        opcao = 0;
        console.log("sua consulta", consulta);
        consulta = {
          nome: "",
          medico: "",
          data: "",
          hora: "",
          cancelada: false,
        };
      }
    }
  }
});
