import React from "react";
import "./style.css";

export default function Contato() {
  return (
    <section className="contato-bg">
      <div className="container box-contatos">
        <h2>Fale conosco</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>
        <div className="contato-cards">
          <div className="contatos">
            <h3>Contato</h3>
            <div>
              <img src="assets/local.png" />
              <p>Nova Iguaçu, RJ</p>
            </div>
            <div>
              <img src="assets/telefone.png" />
              <p>(21) 9999-9999</p>
            </div>
            <div>
              <img src="assets/email.png" />
              <p>contato@oticavida.com</p>
            </div>
          </div>
          <div className="contatos">
            <h3>Nossas Redes Sociais</h3>
            <div>
              <img src="assets/fb.png" />
              <p>/OticaVida</p>
            </div>
            <div>
              <img src="assets/ig.png" />
              <p>@oticavidarj</p>
            </div>
            <div>
              <img src="assets/tt.png" />
              <p>@oticavidarj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
