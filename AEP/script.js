// LISTA DE USUÁRIOS -------------------------------------------------------------------------------------


const usuario = [
  {
    id: 1,
    nome: "Milton",
    cpf: "321.321.321-32",
    dataNascimento: "18/12/2005",
    username: "milton",
    telefone: "44 77777-7777",
    senha: "12345678",
    email: "milton@gmail.com",
  },

  {
    id: 2,
    nome: "Nicole",
    cpf: "123.123.123-12",
    dataNascimento: "01/09/2007",
    username: "nicole",
    telefone: "44 88888-8888",
    senha: "87654321",
    email: "nicole@email.com",
  },

  {
    id: 3,
    nome: "Apollo",
    cpf: "666.666.666-66",
    dataNascimento: "03/07/2004",
    username: "apollo",
    telefone: "44 99999-9999",
    senha: "123456",
    email: "apollo@email.com",
  },

];


// LISTA DE CARONAS -------------------------------------------------------------------------------------


const carona = [
  {
    id: 1,
    qtdPassageiro: 2,
    origem: "Terminal Intermodal",
    destino: "Unicesumar",
    horarioSaida: "07:10",
    horarioChegada: "07:45",
    data: "20/07/2026",
    preco: 30,
  },

  {
    id: 2,
    qtdPassageiro: 3,
    origem: "Unicesumar",
    destino: "Terminal Intermodal",
    horarioSaida: "11:55",
    horarioChegada: "12:30",
    data: "20/07/2026",
    preco: 40,
  },

  {
    id: 3,
    qtdPassageiro: 1,
    origem: "UEM",
    destino: "Avenida Center",
    horarioSaida: "17:20",
    horarioChegada: "17:55",
    data: "21/07/2026",
    preco: 50,
  },

  {
    id: 4,
    qtdPassageiro: 4,
    origem: "Catedral",
    destino: "Parque do Japão",
    horarioSaida: "08:30",
    horarioChegada: "09:05",
    data: "21/07/2026",
    preco: 60,
  },

  {
    id: 5,
    qtdPassageiro: 2,
    origem: "Praça Farroupilha", 
    destino: "UEM",
    horarioSaida: "13:15",
    horarioChegada: "13:50",
    data: "22/07/2026",
    preco: 70,
  },

  {
    id: 6,
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


const carro = [
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


const endereco = [
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



// instâncias ------------------------------------------------------------------------------------------------------
/* const list = document.getElementById('myList'); // Get the target UL element
carona.forEach(carona => {
  let li = document.createElement('li');
  li.textContent = carona.horarioChegada;
  list.appendChild(li);
}); */

/*const tableBody = document.querySelector('#userTable tbody');
let htmlString = '';

caronas.forEach(carona => {
  htmlString += `<tr> 
        <td> ${carona.qtdPassageiro} </td>
        <td> ${carona.origem} </td>
        <td> ${carona.destino} </td>
        <td> ${carona.horarioSaida} </td>
        <td> ${carona.horarioChegada} </td>        
        <td> ${carona.data} </td>
        <td> ${carona.preco} </td>
  </tr>`;
});

tableBody.innerHTML = htmlString;
*/


/*
function generateHTML(carona) {
  let html = `
    <table>
      <tr>
        <th> Qtd Passageiro </th>
        <th> Origem </th>
        <th> Destino </th>
        <th> Horário de Saída </th>
        <th> Horário de Chegada </th>
        <th> Data </th>
        <th> Preço </th>
      </tr>
  `;

  caronas.forEach(carona => {
    html += `
      <tr> 
        <td> ${carona.qtdPassageiro} </td>
        <td> ${carona.origem} </td>
        <td> ${carona.destino} </td>
        <td> ${carona.horarioSaida} </td>
        <td> ${carona.horarioChegada} </td>        
        <td> ${carona.data} </td>
        <td> ${carona.preco} </td>
      </tr>
    `;
  });

  html += "</table>";
  return html;
};

document.getElementById("testeteste").innerHTML = generateHTML(carona);
*/

let tabela = document.querySelector(".my-0");
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

// https://www.reddit.com/r/learnjavascript/comments/w1abee/need_help_to_display_array_into_a_tablehtml/
// https://stackoverflow.com/questions/65289629/how-to-insert-values-of-objects-in-array-into-html-table-with-javascript



// OFERECER CARONA ---------------------------------------------------------------------------------------------------------------------

const 






