// LISTA DE USUÁRIOS -------------------------------------------------------------------------------------


let usuario = [
  {
    id: 1,
    nome: "Milton",
    cpf: "321.321.321-32",
    dataNascimento: "18/12/2005",
    username: "milton",
    telefone: "44 77777-7777",
    senha: "123",
    email: "milton@gmail.com",
  },

  {
    id: 2,
    nome: "Nicole",
    cpf: "123.123.123-12",
    dataNascimento: "01/09/2007",
    username: "nicole",
    telefone: "44 88888-8888",
    senha: "123",
    email: "nicole@email.com",
  },

  {
    id: 3,
    nome: "Apollo",
    cpf: "666.666.666-66",
    dataNascimento: "03/07/2004",
    username: "apollo",
    telefone: "44 99999-9999",
    senha: "123",
    email: "apollo@email.com",
  },

];


// LISTA DE CARONAS -------------------------------------------------------------------------------------

const carona = [
  {
    qtdPassageiro: 2,
    origem: "Terminal Intermodal",
    destino: "Unicesumar",
    horarioSaida: "07:10",
    horarioChegada: "07:45",
    data: "20/07/2026",
    preco: 30,
  },

  {
    qtdPassageiro: 3,
    origem: "Unicesumar",
    destino: "Terminal Intermodal",
    horarioSaida: "11:55",
    horarioChegada: "12:30",
    data: "20/07/2026",
    preco: 40,
  },

  {
    qtdPassageiro: 1,
    origem: "UEM",
    destino: "Avenida Center",
    horarioSaida: "17:20",
    horarioChegada: "17:55",
    data: "21/07/2026",
    preco: 50,
  },

  {
    qtdPassageiro: 4,
    origem: "Catedral",
    destino: "Parque do Japão",
    horarioSaida: "08:30",
    horarioChegada: "09:05",
    data: "21/07/2026",
    preco: 60,
  },

  {
    qtdPassageiro: 2,
    origem: "Praça Farroupilha", 
    destino: "UEM",
    horarioSaida: "13:15",
    horarioChegada: "13:50",
    data: "22/07/2026",
    preco: 70,
  },

  {
    qtdPassageiro: 3,
    origem: "Willie Davids",
    destino: "Zona 4",
    horarioSaida: "18:00",
    horarioChegada: "18:35",
    data: "22/07/2026",
    preco: 80,
  },
];


// LISTA DE CARROS -------------------------------------------------------------------------------------


let carro = [
  {
    placa: "ABC1D23",
    marca: "Chevrolet",
    cor: "prata", 
    modelo: "celta",
  },

  {
    placa: "DEF4G56",
    marca: "Fiat",
    cor: "preto",
    modelo: "palio",
  },

  {
    placa: "GHI7J89",
    marca: "Volkswagen",
    cor: "branco",
    modelo: "gol",
  },

  {
    placa: "JKL0M12",
    marca: "Ford",
    cor: "vermelho",
    modelo: "ka",
  },

  {
    placa: "MNO3P45",
    marca: "Renault",
    cor: "azul",
    modelo: "sandero",
  }
];


// LISTA DE ENDEREÇOS -------------------------------------------------------------------------------------


let endereco = [
  {
    rua: "Rua dos Bobos",
    bairro: "Centro",
    cep: "12345-678",
    numero: "0",
    complemento: "Casa",
  },

  {
    rua: "Avenida Principal",
    bairro: "Jardim das Flores",
    cep: "98765-432",
    numero: "123",
    complemento: "Apartamento 456",
  }
];



// ------------------------------------------------------------------------------------------------------
/*
function consultar() {
  // let tabela = document.getElementById("tabela_corpo");
  let tabela = document.querySelector('table my-0');
  for (let obj of carona) {
    let tr = tabela.insertRow();
    tr.insertCell().textContent = obj.qtdPassageiro;
    tr.insertCell().textContent = obj.origem;
    tr.insertCell().textContent = obj.destino;
    tr.insertCell().textContent = obj.horarioSaida;
    tr.insertCell().textContent = obj.horarioChegada;
    tr.insertCell().textContent = obj.data;
    tr.insertCell().textContent = obj.preco;
  } 
}

/*
function consultar() {
  const tabelaCorpo = document.getElementById("tabela_corpo");

  for (const obj of carona) {
    const tr = document.createElement('tr');
    const content = `
    <td> ${ obj.qtdPassageiro } </td>
    <td> ${ obj.origem } </td>
    <td> ${ obj.destino } </td>
    <td> ${ obj.horarioSaida } </td>
    <td> ${ obj.horarioChegada } </td>
    <td> ${ obj.data } </td>
    <td> ${ obj.preco } </td>`; 

    tr.innerHTML = content;
    tableBody.appendChild(tr);
  }
} */




/*
const temp_carona = [  {
    qtdPassageiro: 2,
    origem: "Terminal Intermodal",
    destino: "Unicesumar",
    horarioSaida: "07:10",
    horarioChegada: "07:45",
    data: "20/07/2026",
    preco: 30,
  },
];


function consultar_temp() {
  const tabelaVerificar = document.getElementById("tabela_verificar");

  for (const obj of temp_carona) {
    const tr = document.createElement('tr');
    const content = `
    <td> ${ obj.qtdPassageiro } </td>
    <td> ${ obj.origem } </td>
    <td> ${ obj.destino } </td>
    <td> ${ obj.horarioSaida } </td>
    <td> ${ obj.horarioChegada } </td>
    <td> ${ obj.data } </td>
    <td> ${ obj.preco } </td>`; 

    tr.innerHTML = content;
    tabelaVerificar.appendChild(tr);
    console.log("teste ");
  }
}
*/

// -------------------------------------------------------------------------------------------------------------------------------


function consultar() {
  const tabelaCorpo = document.getElementById("tabela_corpo");

  for (const obj of carona) {
    const tr = document.createElement('tr');
    const content = `
    <td> ${ obj.qtdPassageiro } </td>
    <td> ${ obj.origem } </td>
    <td> ${ obj.destino } </td>
    <td> ${ obj.horarioSaida } </td>
    <td> ${ obj.horarioChegada } </td>
    <td> ${ obj.data } </td>
    <td> ${ obj.preco } </td>
    <td> <a href="consultar_detalhado.html" target="_self">
    <button class="btn btn-sm join-item text-lg h-10 px-6" onclick="ver_detalhado(this)"   style="background-color: #0082CE; color: white;"> Ver </button> </a> </td>`;

    tr.innerHTML = content;
    tabelaCorpo.appendChild(tr);
  }
}

consultar();


function adicionar_carona() {
  // carona
  const carona_data = document.getElementById("carona_data").value;
  const carona_origem_local = document.getElementById("carona_origem_local").value.trim();
  const carona_origem_horario_saida = document.getElementById("carona_origem_horario_saida").value;
  const carona_destino_local = document.getElementById("carona_destino_local").value.trim();
  const carona_destino_horario_chegada = document.getElementById("carona_destino_horario_chegada").value;
  const carona_qtd_passageiro = document.getElementById("carona_qtd_passageiro").value.trim();
  const carona_preco = document.getElementById("carona_preco").value.trim();

  // carro
  const carona_carro_placa = document.getElementById("carona_carro_placa").value;
  const carona_carro_marca = document.getElementById("carona_carro_marca").value;
  const carona_carro_cor = document.getElementById("carona_carro_cor").value;
  const carona_carro_modelo = document.getElementById("carona_carro_modelo").value;

  if ((carona_data && carona_origem_local && carona_destino_local && carona_carro_placa && carona_carro_modelo) !== "" ) {
    const nova_carona = {
      qtdPassageiro: carona_qtd_passageiro,
      origem: carona_origem_local,
      destino: carona_destino_local,
      horarioSaida: carona_origem_horario_saida,
      horarioChegada: carona_destino_horario_chegada,
      data: carona_data,
      preco: carona_preco,
    }


    carona.push(nova_carona);
    alert("Carona oferecida com sucesso!");
  } else {
    alert("Campos inválidos.");
  }
}


//  href="oferecer_confirmar.html" target="_self"

function ver_detalhado(button) {




}


function login() {
  const input_usuario = document.getElementById("usuario").value.trim();
  const input_senha = document.getElementById("senha").value.trim();
  let verifica = false;

  for (const item of usuario) {
    if (item.email == input_usuario && item.senha == input_senha) {
      verifica = true;
      console.log("logado");
    }
console.log("asdasda");

  }


}



