"use client"
import { TypeAnimation } from 'react-type-animation';

const TypingEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'Im a Software Engineer student',
        3000, 
        'Im a Coud Engineer Intern',
        3000,
        'Im a Platform Developer Intern',
        3000,
        'Im a Founder of LeetCode Club',
        3000,
        'Im a CS Tutor/Embedded Tutor',
        3000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color: '#3ea1ce' }}
      repeat={Infinity}
    />
  );
};

export default TypingEffect;