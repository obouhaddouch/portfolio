import React from 'react'



const SkillBar = (props) => {
  return (
    <div className='skill-bar'>
        <div className='skill-bar-L' style={{"width" : props.level}} ></div>
    </div>
  )
}






export default SkillBar;
