import React from 'react';

/**
 * Um componente para informar as experiências de trabalho.
 * 
 * primeiro criei um mini-objeto contendo as experiências.
 * em seguida renderiza essa lista.
 *
 */

function Experiencia() {
  const experiences = [
    {
      year: '2023 - Atual',
      company: 'Eficiência Fiscal',
      role: 'DESENVOLVEDOR WEB JÚNIOR',
      description:
        'Responsável pelo desenvolvimento de uma aplicação web utilizando o framework Laravel. Atuação com um módulo baseado em web scraping em Python, incluindo treinamento de equipe e homologação de módulos. Contribuição no desenvolvimento e aprimoramento da aplicação web.',
    },
    {
      year: '2024 - Atual',
      company: 'Projeto Pessoal',
      role: 'MIX GENERATOR',
      description:
        'Desenvolvi uma aplicação web em Django para gestão de produtos e vendas. Inclui um importador em Python para processar PDFs complexos, extraindo informações essenciais para análise de dados. Configurei o servidor e implantei a aplicação em produção.',
    },
  ];

  return (
    <div className="experience">
      <h3 className="fw-bold text-light">EXPERIÊNCIA DE TRABALHO</h3>
      <hr />
      {experiences.map((exp, i) => (
        <div key={i} className="row pt-2 text-white">
          <div className="col-lg-3">
            <p className="fw-bold mb-0 text-light">{exp.year}</p>
            <p className='text-white'>{exp.company}</p>
          </div>
          <div className="col-lg-9">
            <p className="fw-bold mb-0">{exp.role}</p>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experiencia;