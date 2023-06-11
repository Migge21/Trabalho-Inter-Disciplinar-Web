function pesquisar() {
  var palavraChave = document.getElementById("palavraChaveInput").value;

  window.location.href = "pesquisa.html?search=" + palavraChave;
}

function buscarPorPalavraChave() {
  const urlParams = new URLSearchParams(window.location.search);

  const palavraChave = urlParams.get("search");

  //   if (produtosRelacionados == "") {
  //     return;
  //   }

  fetch("https://diwserver.vps.webdock.cloud/products?page=560")
    .then((resposta) => resposta.json())
    .then((dados) => {
      const produtos = dados.products;
      var produtosRelacionados = produtos.filter(function (produto) {
        return produto.title.toLowerCase().includes(palavraChave.toLowerCase());
      });

      var conteudoPrincipal = document.getElementById("ResultadoPesquisa");

      var cc = produtosRelacionados
        .map(function (produto) {
          return `<div class="CardContainer">
          <div class="CardConteudo">
            <img
              src="${produto.image}"
              alt=""
              height="150px"
            />
            <h4 class="CardTitulo">${produto.title}</h4>
            
            <div class="small">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              (${produto.rating.rate})
            </div>
            <div class="d-flex flex-column">
              <b>
                <p>$${produto.price}</p>
              </b>
              <a class="btn btn-outline-success" href="detalhes.html?id=${produto.id}">Detalhes</a>
            </div>
          </div>
        </div>
         `;
        })
        .join("");

      conteudoPrincipal.innerHTML = cc;
    });
}
