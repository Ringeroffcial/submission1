import React from 'react';
import './MemberInfor.css'

const MemberInfo = ({ pic, name, job, bio, contact, className }) => {
  return (
    <div className={`profilecard ${className || ''}`}>
      <div className='card'>
        <img src={pic} alt="Member" className='image'/>
        <h1 className='closer-to-pic'><strong>{name}</strong></h1>
        <p><strong>{job}</strong></p>
        <p>{bio}</p>
        <h4><strong>{contact}</strong></h4>
      </div>
    </div>
  );
}

export default MemberInfo;