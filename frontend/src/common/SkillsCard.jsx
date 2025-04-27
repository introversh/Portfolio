import React from 'react'

function SkillsCard({src, skillname}) {
  return (
    <span>
          <img src={src} alt={`${skillname} image`} />
          <p>{skillname}</p>
    </span>
  
  );
}

export default SkillsCard
