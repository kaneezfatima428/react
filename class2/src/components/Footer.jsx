import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <p className="mb-1">&copy; 2026 ShopZone. All Rights Reserved.</p>
      <div>
        <a href="#privacy" className="text-secondary text-decoration-none mx-2">Privacy Policy</a>
        <a href="#terms" className="text-secondary text-decoration-none mx-2">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;