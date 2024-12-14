import React, { useEffect } from 'react';
import "../index.css"

const MouseTrailz = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseShape = document.createElement('div');
      mouseShape.className = 'mouse-trail';
      mouseShape.style.top = `${e.pageY}px`;
      mouseShape.style.left = `${e.pageX}px`;
      document.body.appendChild(mouseShape);

      setTimeout(() => mouseShape.remove(), 500);
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // No visible component, just the effect
};

function MouseTrail () {
    return(
        <MouseTrailz/>
    )
    
};

export default MouseTrail