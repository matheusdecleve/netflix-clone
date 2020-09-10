import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__social">
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaYoutube />
        </a>
      </div>
      <div className="footer__links">
        <div>
          <a href="/">Idioma e legendas</a>
          <a href="/">Imprensa</a>
          <a href="/">Privacidade</a>
          <a href="/">Entre em contato</a>
        </div>
        <div>
          <a href="/">Audiodescrição</a>
          <a href="/">Relações com investidores</a>
          <a href="/">Avisos legais</a>
        </div>
        <div>
          <a href="/">Centro de ajuda</a>
          <a href="/">Carreiras</a>
          <a href="/">Preferências de cookies</a>
        </div>
        <div>
          <a href="/">Cartão pré-pago</a>
          <a href="/">Termos de uso</a>
          <a href="/">Informações corporativas</a>
        </div>
      </div>
      <div className="footer__copy">
        <div>
          <small>
            ® 2020 A Netflix clone by{" "}
            <a href="https://www.matheus.in" target="_blank">
              Matheus Decleve
            </a>
            .
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
