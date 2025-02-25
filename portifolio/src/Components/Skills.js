import React from 'react';

/**
 * Um componente para informar as "HARD SKILLS", as habilidades que eu tenho.
 * 
 * primeiro uma lista com todas as Skills.
 * segundo retorna um um html com bootstrap fazendo ele como botões.
 *
 */

function Skills() {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Python', 'Django', 'PHP', 'Laravel', 'Postgres', 'SQL', 'C#',
  ];

  return (
    <div className="skills pt-5">
      <h3 className="fw-bold text-light">HARD SKILLS</h3>
      <hr />
      <div className="d-flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <button key={i} className="btn btn-outline-light">
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Skills;