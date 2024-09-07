function pesquisar() {
    // Função responsável por pesquisar e exibir os resultados na seção com o ID "resultados-pesquisa".
  
    let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos.
  
    let campoPesquisa = document.getElementById ("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "Nenhum resultado foi encontrado."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let unidadedafederacao = "";
    let descricao = "";
    let capital = "";
    let tags = "";

  
    for (let dado of dados) { // Itera sobre cada dado na lista de dados.
      // Cria um novo elemento div para cada resultado.
      unidadedafederacao = dado.unidadedafederacao.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      capital = dado.capital.toLowerCase()
      tags = dado.tags.toLocaleLowerCase()

      if (unidadedafederacao.includes(campoPesquisa) || descricao.includes(campoPesquisa) || capital.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="https://goias.gov.br/" target="_blank">${dado.unidadedafederacao}</a>
          </h2>
          <p class="capital-meta">${dado.capital}</p>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href= ${dado.link} target="_blank">Saiba Mais</a>
        </div>`;
    }
      }
      //console.log(dado.unidadedafederacao.includes(campoPesquisa))
      
      if (!resultados){
        resultados = "Nenhum resultado foi encontrado. Pesquise novamente sobre os estados da região Centro-Oeste do Brasil."
      }
  
    // Atribui a string com os resultados ao conteúdo HTML da seção.
    section.innerHTML = resultados;
  };





