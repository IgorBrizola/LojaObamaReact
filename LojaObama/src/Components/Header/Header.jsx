import "./Header.css";

function Header() {
  return (
    <header class="cabecalho">
      <h1 class="logo">
        <a href="index.html" title="Loja de Informática França TEC"><img src="./img/shop.png" alt=""/></a>
      </h1>
      <form action="" method="post">
        <input
          type="search"
          name="busca"
          id="busca"
          placeholder="Faça sua busca aqui!"
        />
        <button>
          <i  class="bi bi-search"></i>
        </button>
      </form>
    </header>
  );
}
export default Header;
