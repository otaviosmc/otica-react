import React from "react";
import "./style.css";

export default function QuemSomos() {
  return (
    <section className="bg-qs">
      <section className="box-qs container">
        <h2>Quem somos nós?</h2>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.
        </p>
        <div className="vantagens">
          <div className="vantagens-card">
            <img src="/assets/loja.png" />
          </div>
          <div className="vantagens-card b-b">
            <h3>Nossas Filiais</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className="vantagens-card">
            <h3>Atendimento Flexível</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>
          <div className="vantagens-card">
            <img src="/assets/atendimento.png" />
          </div>
        </div>
      </section>
    </section>
  );
}
