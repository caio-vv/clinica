let consulta = {
  nome: "",
  medico: "",
  data: "",
  hora: "",
};
let consultas = [];
let deleteconsulta = [];
let opcao = 0;

console.log("Digite 1 para adicionar a consulta e insira seu nome. Digite 2 para listar todas as consultas agendadas.");

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
        };
      }
    }
    if (opcao == 2){
        if (consultas == ""){
            console.log("não possui consultas")
            process.exit()
        } else {
            console.log("essas são as consultas atuais", consultas)
            opcao = 0 
        }
    }
    if (opcao == 3){
        let consultaRemover = data.toString().toLowerCase().trim()
        let consultaEncontrada = false
        consultas.forEach((consulte, index) =>{
            if (consulte.nome.toLowerCase() == consultaRemover.toLowerCase()){
                consultas.splice(index, 1);
                consultaEncontrada = true
            }
        })
        if (consultaEncontrada = true){
            console.log("consulta removida")
            opcao = 0
        } else {
            console.log("consulta não encontrada")
            opcao = 0
        }
    }
  }
});
