import React from "react";

const MainContent = () => {
  return (
    <main>
      {/* Seção Banner */}
      <section className="banner">
        <div className="banner-overlay"></div> {/* Sobreposição */}
        <div className="banner-content">
          <h1 className="titulo-banner">
            SUA BELEZA
            <br />É NOSSA INSPIRAÇÃO
          </h1>
          <p className="subtitulo-banner">
            UM TOQUE DE ESTILO PARA CADA MOMENTO ESPECIAL
          </p>
          <a href="#sobre" className="banner-btn">
            <span>CONHEÇA O SALÃO</span>
          </a>
        </div>
      </section>

      {/* Seção Bem vindo ao Beleza Pura */}
      <section id="sobre" className="bem-vindo">
        <div className="bem-vindo-coluna esquerda">
          <h3 className="titulo-bem-vindo">BEM VINDO AO </h3>
          <h1 className="titulo-ao-beleza-pura">BELEZA PURA</h1>
          <p className="paragrafo-bem-vindo">
            No Beleza Pura, entendemos que cada cliente é único e merece um
            atendimento personalizado. Oferecemos uma variedade de serviços,
            incluindo cortes de cabelo modernos, coloração vibrante, tratamentos
            capilares revitalizantes, manicure e pedicure com design exclusivo,
            além de serviços de maquiagem para todas as ocasiões. Trabalhamos
            com produtos de alta qualidade, garantindo resultados incríveis e
            duradouros.
            <br />
            <br />
            Nosso espaço é acolhedor e pensado para proporcionar uma experiência
            relaxante. Aqui, você pode desfrutar de um ambiente agradável
            enquanto se cuida.
            <br />
            <br />
            Venha nos visitar e descubra como podemos realçar sua beleza!
          </p>
        </div>
        <div className="bem-vindo-coluna direita">
          <img
            className="whatsapp-icon"
            src={`${process.env.PUBLIC_URL}/img/bem-vindo.png`}
            alt="Descrição"
          />
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="sessao-servicos">
        <div className="sessao-conteudo-servicos-coluna-esquerda">
          {/* Coluna Esquerda */}
          <div className="servicos-coluna-esquerda">
            <div className="caixinha-servicos-coluna-esquerda">
              <img
                src={`${process.env.PUBLIC_URL}/img/Manicure.webp`}
                alt="Imagem de manicure"
              />
              <div className="titulo-servicos-coluna-esquerda">
                <h3>Manicure e Pedicure</h3>
                <p>Renove sua pele e realce sua beleza.</p>
              </div>
            </div>
            <div className="caixinha-servicos-coluna-esquerda">
              <img
                src={`${process.env.PUBLIC_URL}/img/depilacao-estetica.jpg`}
                alt="Imagem de depilação e estetica"
              />
              <div className="titulo-servicos-coluna-esquerda">
                <h3>Depilação e Estética</h3>
                <p>
                  Unhas personalizadas, unhas de porcelana, gel e silicone e
                  muito mais.
                </p>
              </div>
            </div>
            <div className="caixinha-servicos-coluna-esquerda">
              <img
                src={`${process.env.PUBLIC_URL}/img/biomedica-3.jpg`}
                alt="Imagem de biomédica"
              />
              <div className="titulo-servicos-coluna-esquerda">
                <h3>Biomédica</h3>
                <p>
                  Preenchimento labial, botox e muito mais. Cuidados que realçam
                  sua beleza e bem-estar, como você merece!
                </p>
              </div>
            </div>
            <div className="caixinha-servicos-coluna-esquerda">
              <img
                src={`${process.env.PUBLIC_URL}/img/cabelos-e-penteados.jpg`}
                alt="Imagem de biomédica"
              />
              <div className="titulo-servicos-coluna-esquerda">
                <h3>Cabelos e Penteados</h3>
                <p>
                  Transforme seu visual com cortes, coloração e tratamentos
                  exclusivos para realçar a beleza dos seus cabaloes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="sessao-conteudo-servicos-coluna-direita">
          <h2 className="titulo-servicos-coluna-direita">NOSSOS SERVIÇOS</h2>
          <p className="paragrafo-servicos-coluna-direita">
            Oferecemos uma gama completa de serviços para realçar sua beleza e
            bem-estar. Nossos tratamentos para pés e mãos garantem que suas
            unhas estejam sempre impecáveis, com opções de manicure e pedicure
            que incluem desde cuidados básicos até nail art criativa. Além
            disso, contamos com serviços de depilação que proporcionam uma pele
            suave e livre de pelos, e tratamentos estéticos que visam melhorar a
            sua autoestima. Não deixe de experimentar nossa limpeza de pele, que
            revitaliza e renova a sua cútis, garantindo uma aparência saudável e
            radiante.
          </p>
          <a href="https://wa.me/5511946580702" className="botao-servicos">
            SAIBA MAIS
          </a>
        </div>
      </section>

      {/* Seção Onde Estamos */}
      <section id="horario" className="sessao-onde-estamos">
        <div className="onde-estamos esquerda">
          <h1>
            ONDE ESTAMOS?
            <span className="icon">
              <img
                src={`${process.env.PUBLIC_URL}/img/icone-localizacao.png`}
                alt="Ícone de localização"
              />
            </span>
          </h1>
          <p className="paragrafo-localizacao">
            <strong>Localizados na Vila Formosa - São Paulo,</strong> conhecida
            por sua rica e oferta de comércios. Nossa localização proporciona
            fácil acesso para todos os nossos clientes.
          </p>
          <div className="mapa-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58519.14230983374!2d-46.59532159735433!3d-23.552405982231342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d5bc8932bff%3A0x258a53d5232301fc!2sBeleza%20Pura!5e0!3m2!1spt-BR!2sbr!4v1730920379283!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div id="contato" className="onde-estamos-direita">
          <h1 className="titulo-entre-em-contato">ENTRE EM CONTATO</h1>
          <div className="titulos-e-subtitulos">
            <h2 className="subtitulo-entre-em-contato">ENDEREÇO:</h2>
            <p className="paragrafo-onde-estamos">
              Rua Chagu, 337 - Vila Formosa - São Paulo/SP
            </p>
            <h2 className="subtitulo-entre-em-contato">TELEFONE</h2>
            <p className="paragrafo-onde-estamos">(11) 9 4658-0702</p>
            <h2 className="subtitulo-entre-em-contato">E-MAIL</h2>
            <p className="paragrafo-onde-estamos">silvananeves2@gmail.com</p>
            <h2 className="subtitulo-entre-em-contato">
              HORÁRIO DE FUNCIONAMENTO
            </h2>
            <p className="paragrafo-onde-estamos">
              Segunda a Sexta: 9h às 19h
              <br />
              Sábado: 9h às 16h
              <br />
              Domingo:Fechado
            </p>
          </div>
          <div className="agendar-horario">
            <h1 className="titulo-agendar-horario">AGENDE SEU HORÁRIO</h1>
            <p className="paragrafo-agendar-horario">
              Clique no botão abaixo para fazer seu agendamento diretamente pelo
              WhatsApp. É rápido e prático!
            </p>
            <a
              href="https://wa.me/5511946580702"
              className="agendar-botao"
              target="_blank"
            >
              WHATSAPP{" "}
              <img
                className="whatsapp-icon"
                src={`${process.env.PUBLIC_URL}/img/icone-whatsapp.png`}
                alt="Ícone do whatsapp"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Seção Depoimentos */}
      <section className="depoimentos">
        <h2>DEPOIMENTOS DOS CLIENTES</h2>

        <div className="depoimentos-container">
          {/* Depoimento 1 */}
          <article className="depoimento">
            <img
              className="cliente-foto"
              src={`${process.env.PUBLIC_URL}/img/nay-santos.png`}
              alt="Foto do cliente"
            />
            <h3>Nay Santos</h3>
            <p className="cliente-avaliacoes">15 avaliações</p>
            <div className="estrelas">★★★★★</div>
            <p className="cliente-comentario">
              "O atendimento foi maravilhoso! Me senti muito bem cuidada e com
              certeza voltarei."
            </p>
          </article>
          {/* Depoimento 2 */}
          <article className="depoimento">
            <img
              className="cliente-foto"
              src={`${process.env.PUBLIC_URL}/img/marcio-tucillo.png`}
              alt="Foto do cliente"
            />
            <h3>Marcio Tucillo</h3>
            <p className="cliente-avaliacoes">20 avaliações</p>
            <div className="estrelas">★★★★★</div>
            <p className="cliente-comentario">
              "Profissionais incríveis, ambiente acolhedor e resultado
              impecável. Recomendo muito!"
            </p>
          </article>
          {/* Depoimento 3 */}
          <article className="depoimento">
            <img
              className="cliente-foto"
              src={`${process.env.PUBLIC_URL}/img/anselmo-cordeiro.png`}
              alt="Foto do cliente"
            />
            <h3>Anselmo Cordeiro</h3>
            <p className="cliente-avaliacoes">30 avaliações</p>
            <div className="estrelas">★★★★★</div>
            <p className="cliente-comentario">
              "Fiquei impressionada com a qualidade dos serviços. Superou todas
              as minhas expectativas!"
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
