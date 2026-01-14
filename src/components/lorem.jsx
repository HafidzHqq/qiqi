import React from 'react';

function LoremComponent() {
  const loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  
  return (
    <div style={{ 
      padding: '20px', 
      lineHeight: '1.6', 
      color: '#fff',
      fontSize: '16px',
      marginTop: '20px',
      textAlign: 'justify'
    }}>
      <p>{loremText}</p>
    </div>
  );
}

export default LoremComponent;