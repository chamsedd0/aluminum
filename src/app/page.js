'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import styled, { keyframes } from 'styled-components';
import FactorySection from './FactorySection';
import ProductsSection from './ProductSection';
import TestimonialsSection from './TestimonialsSection';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Footer from './Footer';
import QuotePopup from './QuotePopup';
import Capabilities from './Capabilities';
import CustomerVisits from './BentoGrid';
import Certification from './Certifications';
import PreFooter from './PreFooter';
import Image from 'next/image';



export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [isMenuOpened, setIsMenuOpened] = useState(false);

 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((window.scrollY > 0) ? 1 : 0);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const { ref, inView } = useInView({
    triggerOnce: true, // Animation will only trigger once
    threshold: 0.2, // Trigger when 20% of the component is in view
});


  return (
    <Container>
      <Overlay isMenuOpened={isMenuOpened} onClick={() => setIsMenuOpened(false)} />
      <QuotePopup isOpen={isPopupOpen} onClose={setIsPopupOpen} />
      <HeroSection>
        <Nav isscrolled={isScrolled ? "true" : undefined} isMenuOpened={isMenuOpened}>
          <Image src={isScrolled ? '/logo.svg' : '/Logo_.svg'} width={120} height={34} alt='nothing'></Image>
          <div className="links">
            <Link href='https://www.wellste.com/'>Home</Link>
            <Link href='https://www.wellste.com/aluminum-extrusions/'>Products</Link>
            <Link href='/'>Industries</Link>
            <Link href='https://www.wellste.com/contact/'>Custom</Link>
          </div>
          <div className="burger-menu" onClick={() => setIsMenuOpened(!isMenuOpened)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <DropdownMenu isMenuOpened={isMenuOpened}>
            <Link href='https://www.wellste.com/'>Home</Link>
            <Link href='https://www.wellste.com/aluminum-extrusions/'>Products</Link>
            <Link href='/'>Industries</Link>
            <Link href='https://www.wellste.com/contact/'>Custom</Link>
          </DropdownMenu>
        </Nav>
        <HeroContent>
          <img src='/aluminum.svg'></img>
          <Subtitle>Great ideas need strong structures</Subtitle>
          <Description>Built to thrive with our aluminum</Description>
          <CallToAction onClick={() => setIsPopupOpen(true)}>Get a Custom Quote</CallToAction>
        </HeroContent>
      </HeroSection>
      
      <PartnersSection>
        <PartnersTitle>Our Partners</PartnersTitle>
        <Logos>
          <Logo src="/partner1.svg" alt="SpaceX" />
          <Logo src="/partner2.svg" alt="Singapore Airlines" />
          <Logo src="/partner3.svg" alt="Walmart" />
          <Logo src="/partner4.svg" alt="Hitachi" />
          <Logo src="/partner5.svg" alt="Electrolux" />
          <Logo src="/partner6.svg" alt="Emerson" />

          <Logo src="/partner1.svg" alt="SpaceX" />
          <Logo src="/partner2.svg" alt="Singapore Airlines" />
          <Logo src="/partner3.svg" alt="Walmart" />
          <Logo src="/partner4.svg" alt="Hitachi" />
          <Logo src="/partner5.svg" alt="Electrolux" />
          <Logo src="/partner6.svg" alt="Emerson" />
        </Logos>
      </PartnersSection>

      <Aboutus>
        <div className="first">

            <div className="text">
                <h2>
                  About Us
                </h2>

                <p>
                    Wellste strives to be the most customer-centric aluminum extrusion manufacturer worldwide. We have served over <b>10,000</b> customers with custom and non-custom aluminum extrusions. Our aluminum extrusion and aluminum trims shelved stock is broad and most likely we have your custom extrusion as a ready-to-ship and package product. 
                </p>

                <p>
                If your aluminum trim isn’t readily available in our warehouses, we have industrial casting and tooling capabilities to produce dies and jigs for your custom drawings. At Wellste, the strength of your structures comes from the integrity of our supply chain. The journey of your aluminum trims begins at the source and inspection of aluminum billets to match the material properties specific to your project.
                </p>
            </div>

            
            <img src="/aboutus.png" alt="" />

        </div>

        <div className="second">

          <video src="/"></video>

          <div className="textSection">
          <div className="text1">
              <h2>Certifications</h2>
              <div className="certifications">
                <b>ISO9001-2001</b>
                <b>IATF 16949:2016</b>
                <b>GB/T 19001-2016</b>
              </div>
          </div>

          <div className="text1">
              <h2>OEM and ODM Capabilities</h2>
              <p>
              We are a capable OEM and ODM manufacturer, specializing in customized designs and high quality manufacturing for diverse industries. Our team ensures precision, efficiency, and on-spot design changes, from tailored components to complete product designs.
              </p>
          </div>
          </div>
          
        </div>
      </Aboutus>

      <Statistics ref={ref}>
      <h2>Wellste in Numbers</h2>

            <div className="stats">
                <div className="stat">
                    <img src='/customers.svg' alt="Customers" />
                    <span>
                        {inView ? (
                            <CountUp end={10000} duration={3} separator=" " />
                        ) : (
                            '0'
                        )}
                        +
                    </span>
                    <p>Customers</p>
                </div>
                <div className="stat">
                    <img src='/employees.svg' alt="Employees" />
                    <span>
                        {inView ? (
                            <CountUp end={800} duration={3} separator=" " />
                        ) : (
                            '0'
                        )}
                        +
                    </span>
                    <p>Employees</p>
                </div>
                <div className="stat">
                    <img src='/engineers.svg' alt="Engineers" />
                    <span>
                        {inView ? (
                            <CountUp end={30} duration={3} separator=" " />
                        ) : (
                            '0'
                        )}
                        +
                    </span>
                    <p>Engineers</p>
                </div>
                <div className="stat">
                    <img src='/surface.svg' alt="Covered Facility" />
                    <span>
                        {inView ? (
                            <CountUp end={50000} duration={3} separator=" " />
                        ) : (
                            '0'
                        )}
                        m²
                    </span>
                    <p>Covered Facility</p>
                </div>
            </div>

      </Statistics>

      <FactorySection></FactorySection>
      <Capabilities></Capabilities>
      <ProductsSection onClose={setIsPopupOpen}></ProductsSection>
      <TestimonialsSection></TestimonialsSection>
      <CustomerVisits></CustomerVisits>

      <Certification></Certification>
      
      <PreFooter></PreFooter>
      <Footer />
    </Container>
  );
}

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;
const Container = styled.div`
  font-family: Helvetica, sans-serif;
`;

const HeroSection = styled.div`
  background-image: url('/bg.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 20px;
  padding-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 15px;
    padding-top: 60px;
  }

  @media (max-height: 600px) {
    min-height: 120vh;
  }
`;

const DropdownMenu = styled.div`

    display: flex;
      transition: all 0.3s ease;
      flex-direction: column;
      position: absolute;
      right: 0;
      top: 0;
      align-items: start;
      justify-content: start;
      padding: 100px;
      height: 100vh;
      background-color: white;
      color: #383838;
      font-weight: 600;
      font-size: 20px;
      gap: 60px;
      z-index: 1090;
      transform: ${(props) => (props.isMenuOpened ? "translateX(0px)" : "translateX(310px)")};
      transition: transform 0.5s ease;

      a {
        transition: all 0.3s ease;
        &:hover {
        color: #F8A51E;
      }
      }

`

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  transition: background-color 0.4s ease;
  background: ${({ isscrolled }) => (isscrolled ? 'white' : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)')};
  z-index: 1000;
  padding: 25px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .burger-menu {
    display: none;
    cursor: pointer;
    z-index: 1100;
    
    div {
      width: 25px;
      height: 3px;
      border-radius: 3px;
      background-color: ${({ isscrolled }) => (isscrolled ? '#494949' : 'white')};
      background: ${(props) => (props.isMenuOpened ? "black" : "")};
      margin: 5px 0;
      transition: all 0.3s ease;
    }
  }
  
  img {
    position: absolute;
    left: 40px;
  }

  .links {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    font-size: 18px;
    font-weight: 600;

    a {
      color: ${({ isscrolled }) => (isscrolled ? '#494949' : 'white')};
      transition: all 0.3s ease;
      &:hover {
        color: ${({ isscrolled }) => (isscrolled ? '#F8A51E' : '#cecece')};
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 20px 20px;

    img {
      position: static;
    }

    .links {
      display: none;
    }

    .burger-menu {
      display: block;
      
      // Animate burger menu when opened
      ${({ isMenuOpened }) => isMenuOpened && `
        div:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        div:nth-child(2) {
          opacity: 0;
        }
        
        div:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }
      `}
    }
  }

  @media (max-width: 1200px) {
    .links {
      font-size: 14px;
    }
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;

  img {
    max-width: 450px;
    margin-bottom: 12px;
  }

  @media (max-width: 1080px) {

    
    img {
      max-width: 360px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 768px) {
    padding-top: 16px;
    gap: 8px;
    
    img {
      max-width: 280px;
      margin-bottom: 8px;
    }
  }

  @media (max-width: 480px) {
    img {
      max-width: 240px;
    }
  }
`;

const Subtitle = styled.h2`
  margin-top: 10px;
  font-size: 42px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: 6px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Description = styled.p`
  font-size: 28px;
  margin-top: 6px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-top: 4px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const CallToAction = styled.button`
  margin-top: 1.5rem;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #126BB0;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0px 40px;
  height: 60px;

  &:hover {
    background-color: #1061a0;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    padding: 0px 30px;
    height: 50px;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 0px 25px;
    height: 45px;
    font-size: 12px;
  }
`;

const PartnersSection = styled.div`
  padding: 3rem 0;
  text-align: center;
`;

const PartnersTitle = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #126BB0;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: start;
  padding: 0px 30px;
  animation: ${scroll} 25s linear infinite;
  width: 200%;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    
    gap: 20px;
  }
`;

const Logo = styled.img`
  width: 250px;
  filter: grayscale(1);
  transition: all 0.3s ease;

  &:hover {
    filter: none;
  }

  @media (max-width: 768px) {
    width: 120px;
  }
`;

const Aboutus = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: clamp(30px, 5vw, 70px);
  padding: clamp(20px, 4vw, 70px);
  margin-bottom: clamp(40px, 6vw, 80px);

  @media (max-width: 1024px) {
      .second {
        flex-direction: column-reverse !important;
      }
    }

  .first, .second {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: clamp(20px, 4vw, 60px);

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }

    p {
      font-size: clamp(16px, 2vw, 18px);
      font-weight: 500;
      color: #383838;
      line-height: 1.6;
    }

    h2 {
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 700;
      color: #126BB0;
      width: 100%;
    }

    video {
      width: 80%;
      height: auto;
      aspect-ratio: 16/9;
      min-width: unset;
      min-height: unset;
      max-width: 1010px;
      border-radius: clamp(8px, 1.5vw, 16px);
      background-color: #383838;
    }
  }

  .first img {
    width: 50%;
    height: auto;
    aspect-ratio: 16/10;
    min-width: unset;
    min-height: unset;
    max-height: 540px;
    max-width: 720px;
    border-radius: clamp(8px, 1.5vw, 16px);
    background: gray;
    
    @media (max-width: 1024px) {
      width: 80%;
    }
  }

  .text, .textSection {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: clamp(15px, 2.5vw, 30px);
    max-width: 860px;
    width: 85%;

    @media (max-width: 1024px) {
      align-items: center;
      text-align: center;
    }
  }

  .text1 {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: clamp(15px, 2.5vw, 30px);
    width: 100%;

    @media (max-width: 1024px) {
      align-items: center;
    }
  }

  .certifications {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: clamp(8px, 1vw, 12px);
    width: 100%;

    @media (max-width: 1024px) {
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    padding: 15px;
    gap: 20px;

    .first, .second {
      gap: 20px;
    }

    p {
      font-size: 15px;
    }

    h2 {
      font-size: 24px;
    }
  }
`;

const Statistics = styled.div`
  background: url('/mask.svg');
  padding: clamp(30px, 5vw, 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(20px, 3vw, 40px);
  font-size: clamp(18px, 2vw, 24px);
  font-weight: 700;
  color: white;
  text-align: center;
  min-height: 400px; /* Fixed height to prevent jumping */

  .stats {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(10px, 1.5vw, 20px);
    width: 100%;
    padding: 0 clamp(10px, 2vw, 30px);

    .stat {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      gap: clamp(4px, 1vw, 8px);
      font-size: clamp(14px, 1.5vw, 18px);
      width: 22%;
      margin: 0;

      img {
        width: 100%;
        max-width: 180px;
        height: auto;
      }

      p {
        font-size: clamp(14px, 1.5vw, 18px);
        text-align: start;
        font-weight: 800;
      }

      span {
        font-size: clamp(24px, 3vw, 36px);
        text-align: start;
      }
    }
  }

  @media (max-width: 1300px) {

    
    .stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
      
      .stat {
        width: 100%;
        align-items: center;
        text-align: center;

        p, span {
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 700px) {
    min-height: 600px;
    padding: 20px;
    
    .stats {
      transform: scale(0.8);
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  opacity: ${props => props.isMenuOpened ? 1 : 0};
  visibility: ${props => props.isMenuOpened ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;
