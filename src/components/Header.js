import React, { useEffect, useState } from 'react';
import Link from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Head from './Head';

const headerImgStyle = {
  maxWidth: '100%',
  objectFit: 'cover',
}

const navigation = {
  backgroundColor: '#000',
}

const navList = {
  listStyleType: 'none',
  display: 'flex',
  margin: '0 0 0 auto',
  padding: '0',
}

const navListMobile = {
  ...navList,
  flexDirection: 'column',
  width: '100%',
}

export default function Header({
  children,
  showLogo = false,
}) {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(true);

  useEffect(() => {

    const mediaQuery = window.matchMedia('(max-width: 768px)')
    // Handler to call on window resize
    function handleResize() {
      setIsNavOpen(!mediaQuery.matches)
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return (
    <>
    <Head />
    <nav style={navigation} id="mainNav">
      <div className="container flex">
        {isMobile && (
          <div className="header-mobile">
          <a href="/" className="header-logo">
          Rejoice | Commissioning 2023
          </a>
          <div className="nav-toggle" onClick={() => setIsNavOpen(!isNavOpen)}>
          ☰
          </div>
        </div>
        )}
        {isNavOpen && (
          <ul style={isMobile ? navListMobile : navList}>
            <li className="nav-item"><a className="nav-link js-scroll-trigger redCap" href="https://events.uscthq.org/EventHub.aspx?ID=32" target="_blank" rel="noopener">Register</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/#hotels">Hotels</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/#schedule">Schedule</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="http://www.salvationarmymedia.org/commissioning2022.html" target="_blank" rel="noopener">2022 Videos</a></li>
            {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/#guests">Special Guests</a></li>
            
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/MilwaukeeDining.pdf" target="_blank">Restaurants (PDF)</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/5k">5k</a></li> */}
            {/* <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#workshops">Workshops</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="http://usccongress2021.org/social.html">Social Feed</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/livestream.html">Livestream</a></li> */}
        </ul>
        )}
      </div>
    </nav>
    {!isMobile && (
      <div className="poster">
        {children}
      </div>
    )}  
    </>
  )
}