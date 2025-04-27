import React from 'react'

function ProjectCard({src,link,h3,desc}) {
  return (
   <a href={link}>
           <img className='hover' src={src} alt={`${h3}Image`}></img>
           <h3>{h3}</h3>
           <p>{desc}</p>
       </a>
  );
}

export default ProjectCard
