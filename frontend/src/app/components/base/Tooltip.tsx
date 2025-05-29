import React, { useState } from 'react';

export default function Tooltip({ children, text }) {
  const [visible, setVisible] = useState(false);

  return (
    <span 
      style={{ position: 'relative', display: 'inline-block', cursor: 'help' }}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className='swg swg-falcon-2'
    >
      {children}

      {visible && (
        <div style={{
          position: 'absolute',
          bottom: '125%',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#333',
          color: '#fff',
          padding: '6px 8px',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
          fontSize: '12px',
          zIndex: 1000,
          boxShadow: '0px 0px 6px rgba(0,0,0,0.2)'
        }}>
          {text}
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            marginLeft: '-5px',
            width: 0,
            height: 0,
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            borderTop: '5px solid #333',
          }} />
        </div>
      )}
    </span>
  );
}