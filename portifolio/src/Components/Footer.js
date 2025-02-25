import React from 'react';

/**
 * Um footer personalizado para a aplicação.
 *
 */

function Footer() {
  return (
    <footer>
      <p className="d-flex justify-content-center p-4 mb-0">
        <a
          href="https://github.com/Fimaciel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-black"
        >
          ©2025 Filipe Maciel Lopes. Todos os direitos reservados.
        </a>
      </p>
    </footer>
  );
}

export default Footer;