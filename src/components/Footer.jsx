import React from 'react';

const Footer = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '10px', textAlign: 'center' }}>
      <p>Connect with me:</p>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly', listStyleType: 'none', padding: 0 }}>
        <li><a href="https://github.com/connor27allen" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/connor-allen-319082205/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>LinkedIn</a></li>
        <li><a href="https://medium.com/@Prajix" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Blog</a></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Footer;