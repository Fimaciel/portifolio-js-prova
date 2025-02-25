import React from 'react';

/**
 * 
 * Apenas renderiza o cabeçalho da aplicação.
 *
 */
function Header() {
  return (
    <section className="container-fluid p-0">
      <div className="border-radius p-3 d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="p-4 text-center text-md-start">
          <h1 className="fw-bold py-2 display-3">Filipe Maciel Lopes</h1>
          <h3 className="fw-light">DESENVOLVEDOR BACKEND</h3>
        </div>
        <div className="d-flex justify-content-center justify-content-md-end pb-1 pe-1">
        </div>
      </div>
    </section>
  );
}

export default Header;