import React from 'react';

/**
 * Um componente para informar as formações acadêmicas.
 * 
 * primeiro criei um mini-objeto contendo as formações.
 * em seguida renderiza essa lista.
 *
 */

function Education() {
  const educations = [
    {
      year: '2022 - Cursando',
      institution: 'IFRO',
      course: 'Análise e Desenvolvimento de Sistemas',
      description:
        'Curso superior focado em tecnologias e desenvolvimento de software, incluindo programação, banco de dados e gestão de sistemas computacionais.',
    },
    {
      year: '2019 - 2021',
      institution: 'IFRO',
      course: 'Curso Técnico em Informática',
      description:
        'Formação técnica com foco em lógica de programação, redes de computadores, manutenção de hardware e desenvolvimento de sistemas básicos.',
    },
  ];

  return (
    <div className="education pt-5">
      <h3 className="fw-bold text-light">FORMAÇÃO ACADÊMICA</h3>
      <hr />
      {educations.map((edu, i) => (
        <div key={i} className="row pt-2 text-white">
          <div className="col-lg-3">
            <p className="fw-bold mb-0">{edu.year}</p>
            <p>{edu.course}</p>
          </div>
          <div className="col-lg-9">
            <p className="fw-bold mb-0">{edu.institution}</p>
            <p>{edu.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Education;