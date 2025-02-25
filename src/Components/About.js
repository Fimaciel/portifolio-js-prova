import React from 'react';
/**
 *
 * Apenas renderiza o sobre mim.
 *
 */

function About() {
  return (
    <div className="about">
      <h3 className="fw-bold text-light">Sobre Mim</h3>
      <hr />
      <p className='text-white'>
        Sou natural de Ji-Paraná, Rondônia, e atualmente curso Análise e Desenvolvimento de Sistemas no Instituto Federal de Rondônia.
        Possuo mais de um ano de experiência como desenvolvedor full-stack, com uma preferência por desenvolvimento back-end.
        Meu objetivo profissional é integrar equipes de empresas fora do estado, inicialmente em home office, para ampliar minha
        rede de contatos e alcançar novos patamares na área de tecnologia. Após a conclusão do curso, estou disposto a me mudar
        para outras regiões.
      </p>
    </div>
  );
}

export default About;