function detalharProdutos(idProduto) {
  let requisicao = "https://diwserver.vps.webdock.cloud/products/" + idProduto;
  fetch(requisicao)
    .then((res) => res.json())
    .then((produto) => exibirDetalhes(produto));
}

function exibirDetalhes(produto) {
  console.log(produto);

  var detalhesProduto = document.getElementById("detalhesProduto");

  var html = `
  <div class="d-flex flex-row">
  <div class="DetalhesContainer">
    <div class="DetalhesConteudo">
      <div class="separacao">
        <div class="pr-2">
          <img
          class="produto-detalhesimg"
            src="${produto.image}"
            alt=""
          />
        </div>
        <div class="p-3 ColorVar">
          <h3>${produto.title}</span></h3>
          <h4 >Avaliações: <span>${produto.rating.rate}</span></h4>
          <h4>Preço: <span>$${produto.price}</span></h4>
          
          <h3>Descrição:<br /></h3>
          <div class="DetalhesDescricao mb-3">${produto.description}</div>
          <a class="btn btn-outline-danger">Comprar</a>
          <a class="btn btn-outline-success" href="index.html">Voltar</a>
        </div>
      </div>
    </div>
  </div>
</div>
      `;
  console.log(html);
  detalhesProduto.innerHTML = html;
}

window.onload = () => {
  let idParametro = new URLSearchParams(window.location.search);
  let identificador = idParametro.get("id");
  console.log(identificador);
  detalharProdutos(identificador);
};
