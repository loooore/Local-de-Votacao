var escolas_AVR = ["Colégio Estadual Professor Antônio Valdir Roriz - AVR", "Centro Comunitário Cedro - Fazenda", "Centro Comunitário do Caetano - Fazenda", "Centro Comunitário do Cruzeiro - Fazenda", "Centro Comunitário do Mandiocal - Fazenda", "Colégio Estadual de Período Integral Osvaldo C. Meireles - Parque Estrela Dalva I","Colégio Estadual Epaminondas Roriz - Em frente à Promoção", "Colégio Estadual Professora Lourdes de Oliveira Sampaio - CEPLOS", "Colégio Estadual Professor Antônio Marco de Araújo - CEPAMA - Parque Estrela Dalva II", "Escola Municipal. Rural José Rodrigues dos Reis - Fazenda", "Escola Municipal André Rochais - Serrinha", "Escola Municipal Dom Bosco - Parque Alvorada", "Escola Municipal Dona Nenzica - Antiga Criança Esperança - Creche em Frente ao Banco do Brasil", "Escola Municipal Francisco Vieira Lins (Naldo) - Dalva IV", "Escola Municipal Ismar Gonçalves - Mandú", "Escola Municipal Maria Lucinda Leite - Industrial", "Escola Municipal Nair Tiecher - Fazenda", "Escola Municipal Palioca - Prof. Edinir Celeste Roriz Lima - Jardim Brasília Sul", "Escola Municipal Patrícia Prado Monteiro Seixo de Brito - Fumal", "Escola Municipal Prof. Joana d'Arc Maciel de Leles - St. Leste", "Escola Municipal Prof. Marlene Flores de Araújo - Santa Fé I", "Escola Municipal São Mateus - Rosário", "Escola Municipal Silas Santos Júnior - Vila Guará", "Igreja Capelinha - Fazenda"];

var escolas_Alceu = ["Colégio Estadual Alceu de Araújo Roriz - Alceu", "Centro Comunitário do Retiro - fazenda", "Centro Comunitário Padre Bernardo", "Colégio Estadual Cônego Ramiro - Coqueiro", "Colégio Estadual Francisco Machado de Araújo - CEJA - Ao lado do INSS", "Colégio Estadual Ilídio de Souza Lemos - Fazenda Maniratuba", "Colégio Estadual Maria Abadia Salomão - CEMAS - Kenedy", "Colégio Estadual Padre Dario de Romedis - Parque Alvorada", "Colégio Estadual Prof. Josué Meireles - Clube Recreativo", "Escola Municipal Rural Americanos - Fazenda", "Escola Municipal Rural Darcy Ribeiro - Samambaia - Fazenda", "Escola Municipal Rural Hortência Maria Felácio - Fazenda", "Escola Municipal Carlos Alberto Brandão Ferreira (PE TETO) - Setor Fumal", "Escola Municipal Kennedy - Professora Maria Clarice Meireles de Queiroz - Ao lado do antigo Baú", "Escola Municipal Parque Estrela Dalva VII-Prof Geralda D L NetoEscola Municipal Parque Estrela Dalva VII - Professora Geralda D L Neto", "Escola Municipal Professor Sebastião de Araújo Machado - Ipasluz", "Escola Municipal Ramiro de Aguiar - Parque Estrela Dalva VIII", "Escola Municipal São Caetano Rita Gonçalves de Farias", "Escola Municipal Setor Norte Maravilha Professor Belím - Vila Esperança", "Unidade Municipal de Educação Infantil e Estimulação Precoce - Em frente ao Shopping da Carne"];

var select = document.getElementById("table");

// Adiciona escolas no select que votarão no AVR
escolas_AVR.forEach(function(school) {
  let option = document.createElement("option");
  option.value = school;
  option.textContent = school;
  select.appendChild(option);
});

// Adiciona escolas no select que votarão no Alceu
escolas_Alceu.forEach(function(school) {
    let option = document.createElement("option")
    option.value = school
    option.textContent = school
    select.appendChild(option)
})

let localVotacao = "Indefinido";

select.addEventListener("change", (event) => {
    const valorSelecionado = event.target.value;
    const divImg = document.querySelector("#img")
    const titulo = document.getElementById("titulo")
    const text1 = document.querySelector("#textoP1")
  
    if (escolas_AVR.includes(valorSelecionado)) {
        titulo.innerHTML = "Local de votação:";
        text1.innerHTML = 'Colégio Estadual Prof Antônio Valdir Roriz - AVR'
        divImg.style.display = 'block'
        divImg.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3830.3290419014197!2d-47.961788063030696!3d-16.25489795020479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93599825f7e81951%3A0x842313ec6d24db6c!2sCol%C3%A9gio%20Estadual%20Prof%20Ant%C3%B4nio%20Valdir%20Roriz!5e0!3m2!1spt-BR!2sbr!4v1696141072091!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } else if (escolas_Alceu.includes(valorSelecionado)) {
        titulo.innerHTML = "Local de votação:";
        text1.innerHTML = 'Colégio Estadual Alceu de Araújo Roriz - Alceu'
        divImg.style.display = 'block'
        divImg.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7660.691026963906!2d-47.966989874839754!3d-16.25405287438341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935998569c441877%3A0x3d4d9ff596d77a5c!2sCol%C3%A9gio%20Estadual%20Alceu%20de%20Ara%C3%BAjo%20Roriz!5e0!3m2!1spt-BR!2sbr!4v1696096530131!5m2!1spt-BR!2sbr" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    } else {
        titulo.innerHTML = "Local de votação:";
        text1.innerHTML = 'Indefinido'
    }
});

const input = document.getElementById("opFilter");

input.addEventListener("keyup", function() {
  const valorDigitado = input.value.toLowerCase();
  const options = select.querySelectorAll("option");
  for (let option of options) {
    const textoOpcao = option.textContent.toLowerCase();
    if (!textoOpcao.includes(valorDigitado)) {
      option.style.display = "none";
    } else {
      option.style.display = "block";
    }
  }
});
