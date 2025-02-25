import React from 'react';

/**
 *
 * Apenas renderiza os contatos.
 *
 */

function Contact() {
  return (
    <div className=" contact pt-5">
      <h3 className="fw-bold text-light">Contatos</h3>
      <hr />
      <div>
        <a href="#" className="text-decoration-none link-secondary d-flex align-items-center text-white">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/phone.png"
            alt="phone"
            className="m-1"
          />
          (69) 99330-3111
        </a>
      </div>
      <div>
        <a href="mailto:filipemaciellopes01@gmail.com" className="text-decoration-none link-secondary d-flex align-items-center text-white">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/material-rounded/24/new-post.png"
            alt="email"
            className="m-1"
          />
          filipemaciellopes01@gmail.com
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/filipe-maciel-lopes-221256267/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none link-secondary d-flex align-items-center text-white"
        >
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/ios-filled/50/linkedin.png"
            alt="linkedin"
            className="m-1"
          />
          linkedin.com/filipemaciel
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Fimaciel"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none link-secondary d-flex align-items-center text-white"
        >
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/github.png"
            alt="github"
            className="m-1"
          />
          github.com/Fimaciel
        </a>
      </div>
      <div>
        <a href="#" className="text-decoration-none link-secondary d-flex align-items-center text-white">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/?size=100&id=2436&format=png&color=000000"
            alt="location"
            className="m-1"
          />
          Rondônia, Brasil
        </a>
      </div>
    </div>
  );
}

export default Contact;