function Mostrar(tudo) {
  var conteudoPrincipal = document.getElementById("Principal");

  var cc = tudo
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

  conteudoPrincipal.innerHTML += cc;
}

function MaisProcurados(tudo, limite) {
  var conteudoPrincipal = document.getElementById("Procurados");

  var cc = tudo
    .slice(0, limite)
    .map(function (produto) {
      return `<div>
      <div class="CardConteudoEsquerda">
      <a href="detalhes.html?id=${produto.id}">
        <img
          class="imagem_venda_esquerda"
          src="${produto.image}"
          alt=""
          
        />
        </a>
        <div class="p-2">
          <h5 class="CardTitulo">${produto.title}</h5>

          <div class="small">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            (${produto.rating.rate})
          </div>
          <div class="d-flex flex-row">
            <b>
              <p>$${produto.price}</p>
            </b>
            
          </div>
        </div>
      </div>
    </div>`;
    })
    .join("");
  // 1179
  // 560
  conteudoPrincipal.innerHTML += cc;
}

function buscarNoServidor() {
  fetch("https://diwserver.vps.webdock.cloud/products?page=560")
    .then((resposta) => resposta.json())
    .then((dados) => {
      const produtos = dados.products;
      Mostrar(produtos);
      MaisProcurados(produtos, 3);
    })
    .catch((erro) => {
      console.log("Erro na chamada da API:", erro);
    });
}

window.onload = buscarNoServidor;

console.log(buscarNoServidor());
window.onload = buscarNoServidor();
