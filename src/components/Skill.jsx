import { skillText } from '@/constants';

import React from 'react'

const Skill = () => {
  return (
  <section id="skill">
    <div className="skill__inner">
        <div className="skill__title">
            <h2>Challenge <em>나의 도전</em></h2>
        </div>

        <div className="skill__desc">
          {skillText.map((skill, index) => (
            <div key={index}>
                <span>{ index + 1 }</span>
                <h3>{ skill.title }</h3>
                <p>{ skill.desc }</p>
                </div>
          ))}            
        </div>
    </div>
</section>
    
  )
}

export default Skill
