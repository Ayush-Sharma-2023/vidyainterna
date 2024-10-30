import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/nav-logo2.png'

const Navbar: FC = () => {
  return (
<>
    <nav className="navbar">
      
      <div className="logo">
        <Link href="/" passHref>
          <Image src={logo} alt="Logo" width={40} height={40} />
        </Link>
      </div>

      

      <div className="nav-contens">
        
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">About Us</Link></li>
        <li><Link href="/">Mentorship</Link></li>
        <li><Link href="/">Blog</Link></li>
        <li><Link href="/">Contact Us</Link></li>
      </ul>
      </div>

      
      <div className="nav-buttons">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
</>
  );
};

export default Navbar;
