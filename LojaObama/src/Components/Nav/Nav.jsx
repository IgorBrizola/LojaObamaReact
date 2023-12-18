import './Nav.css'


function Navegacao(){
  return(
<nav class="menu">
        <ul>
            <li><a href="index.html">HOME</a></li>
            <li><a href="produtos.html">PRODUTOS</a></li>
            <li><a href="servicos.html">SERVICOS</a></li>
            <li><a href="contatos.html">CONTATOS</a></li>
        </ul>
        <div class="social-icons">
            <a href="http://www.facebook.com" class="btn-facebook"><i class="fa-brands fa-facebook"></i></a>
            <a href="http://www.twitter.com" class="btn-twitter"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="http://www.google.com" class="btn-google"><i class="fa-brands fa-google"></i></a>
        </div>
    </nav>

  )
}export default Navegacao