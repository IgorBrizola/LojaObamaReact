import './Principal.css';

function Principal() {
  return (
    <main className="principal">
      <article className="sobre">
        <h2>Sobre Nós</h2>
        <img
          src="img/informatica.png"
          alt="Imagem de uma loja de informática com três pessoas, sendo dois homens e uma mulher.  Mulher vestida com camisa social azul e homem vestido com camisa social azul escura e vendedor com camisa social branca"
        />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in repellendus fuga velit, quae, quasi
                excepturi consequuntur repellat iure hic nemo assumenda reprehenderit vero tenetur id aperiam
                voluptatum,
                odit ea!</p>
            <p>Unde, praesentium ut aliquam eligendi maxime perspiciatis quaerat ipsa saepe harum reiciendis quasi totam
                iusto dolorum inventore dolores corporis debitis blanditiis beatae veniam doloribus neque quod mollitia.
                Quisquam, ratione tempora?</p>
            <p>Numquam dignissimos a voluptas possimus, consequuntur veniam dicta id temporibus eos repellendus dolores
                tenetur harum repudiandae corrupti nulla molestias magnam animi nostrum suscipit? Qui molestias numquam
                temporibus magnam, ea repudiandae.</p>
            <p>Saepe animi dolore, tenetur quae deserunt recusandae tempora iste esse ad sint illo est commodi
                asperiores
                repellendus molestias. Fugit eum, blanditiis tempore voluptatum dolor enim nobis possimus aperiam
                accusantium sunt!</p>
            <p>Quis nemo deleniti itaque. Vero quis reiciendis, quos eum similique perspiciatis in laboriosam quia aut
                tempora quae dolorem, temporibus tenetur dolorum sapiente. Facere, laboriosam quia numquam consectetur
                voluptates culpa natus.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perspiciatis, itaque quam nam
                corrupti ipsa minus repellat accusamus dolorem, sed expedita obcaecati voluptatem reprehenderit et quasi
                provident blanditiis. Doloribus, assumenda!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae sint ipsa vitae natus laboriosam,
                modi aspernatur saepe praesentium velit et iusto repudiandae, nostrum animi dignissimos aut fuga,
                officia fugiat labore.</p>

      </article>
      <aside className="onde-estamos">
        <h2>ONDE ESTAMOS</h2>
        <p>Rua: Tito nº54 - Vila Romana - São Paulo - SP - Brasil</p>
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13044.347817532622!2d-46.70106866947026!3d-23.44435465000441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1697065463433!5m2!1spt-BR!2sbr" 
         style={{border: '0'}}
          allowfullscreen 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
         <h2>CONTATOS</h2>
            <ul>
                <li><i class="fa-brands fa-whatsapp"></i>11987676816</li>
                <li><i class="fa-solid fa-phone"></i>11998976567</li>
                <li><i class="fa-solid fa-envelope"></i>obamaJaja@gmail.com</li>
            </ul>
      </aside>
    </main>
  );
}
export default Principal;
