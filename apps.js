function pesquisar()
{  
  let section = document.getElementById ("resultados-pesquisa");
console.log(section);
//Iniciar uma string com o armazenamento vazio

let campoPesquisa = document.getElementById ("campo-pesquisa").value 

//se  campoPesquisa for uma string sem nada, n mostrarei nada 
console.log(campoPesquisa);

if(campoPesquisa == "") {
   section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar alguma coisa brasileira</p>"
return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";

for (let dado of dados) {
  titulo = dado.titulo.toLowerCase();
  descricao = dado.descricao.toLowerCase();
  tags = dado.tags.toLowerCase();
if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
//cria um novo elemento html para cada resultado
resultados += ` 
  <div class="item-resultado">
      <h2>
    <a href="#" target="_blank">${dado.titulo}</a>
      </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href=${dado.link} target="_blank">Para saber mais</a>
</div> 
`;
}
}
if (!resultados) {
  resultados = "<p>Nada foi encontrado</p>"
}
section.innerHTML = resultados;
}