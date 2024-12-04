import React from "react";

const Header = () => {
  const toggleMenu = () => {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  };

  return (
    <header>
      {/* Logo */}
      <a href="#home">
        <img
          src="./img/logo-beleza-pura.png"
          alt="Logo do Site"
          className="logo"
        />
      </a>

      {/* Navegação */}
      <nav>
        <ul className="nav-links">
          <li>
            <a className="links-menu" href="#sobre">
              Sobre
            </a>
          </li>
          <li>
            <a className="links-menu" href="#servicos">
              Serviços
            </a>
          </li>
          <li>
            <a className="links-menu" href="#horario">
              Horários
            </a>
          </li>
          <li>
            <a className="links-menu" href="#contato">
              Contato
            </a>
          </li>
          {/* Botão Agendar */}
          <li>
            <a
              href="https://wa.me/5511946580702"
              className="agendar-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar{" "}
              <img
                src="./img/icone-whatsapp.png"
                alt="WhatsApp"
                className="whatsapp-icon"
              />
            </a>
          </li>
        </ul>
      </nav>

      {/* Botão de menu hamburguer */}
      <button className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Símbolo do menu hamburguer */}
      </button>
    </header>
  );
};

export default Header;
