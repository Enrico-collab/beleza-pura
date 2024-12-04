import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-rodape">
          {/* Logo e descrição */}
          <div className="coluna-logo-rodape">
            <h2 className="logo-rodape">BELEZA PURA</h2>
            <p className="paragrafo-logo-rodape">
              Seu destino para beleza e bem-estar.
            </p>
          </div>
          {/* Endereço */}
          <div className="coluna-rodape">
            <h3 className="informacoes-rodape">ENDEREÇO</h3>
            <p className="paragrafo-informacoes-rodape">
              Rua Chagu, 333 - Vila Formosa - São Paulo/SP
            </p>
          </div>
          {/* Contato */}
          <div className="coluna-rodape">
            <h3 className="informacoes-rodape">CONTATO</h3>
            <p className="paragrafo-informacoes-rodape">
              Telefone: (11) 9 4658-0702
            </p>
            <p className="paragrafo-informacoes-rodape">
              Email: silvana@gmail.com
            </p>
          </div>
          {/* Horário de funcionamento */}
          <div className="coluna-rodape">
            <h3 className="informacoes-rodape">HORÁRIO DE FUNCIONAMENTO</h3>
            <p className="paragrafo-informacoes-rodape">
              Segunda à Sexta: 9h às 19h
            </p>
            <p className="paragrafo-informacoes-rodape">Sábado: 9h às 17h</p>
            <p className="paragrafo-informacoes-rodape">Domingo: Fechado</p>
          </div>
        </div>
      </footer>
      {/* Direitos autorais */}
      <div className="copyright">
        <p>&copy; 2024 Beleza Pura. Todos os direitos reservados</p>
        <p className="desenvolvido-por">
          Desenvolvido por: Enrico Clemente Amoroso
        </p>
      </div>
    </>
  );
};

export default Footer;
