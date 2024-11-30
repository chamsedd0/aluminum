// components/Footer.js
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #126BB0; /* Blue background */
  color: white;
  padding: 20px 35px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  margin: 10px 20px;

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
    text-transform: uppercase;

    padding-bottom: 5px;
    width: fit-content;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-size: 0.9rem;
    }
  }
`;

const Line = styled.div`

  width: 100%;
  height: 1px;
  background-color: white;
  margin-bottom: 20px;

`
const Map = styled.div`

  width: 100%;
  height: 200px;
  background-color: gray;
  border-radius: 16px;

`

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;

  
  gap: 20px;
  width: 100%;
  margin-top: 20px;

  a {

    color: white;
    text-decoration: none;

    &:hover {
      color: #ff9800; /* Hover effect */
    }
  }
`;

const FooterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-bottom: 20px;

  img {
    max-width: 300px;
    margin-bottom: 10px;
  }

 

  @media (max-width: 1470px) {
    img {
        max-width: 250px;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
        <FooterContainer>
      {/* Products */}
      <Column>
        <h3>Products</h3>
        <Line/>
        <ul>
          <li>Extruded Aluminum Profile</li>
          <li>Aluminum Pipes & Tubes</li>
          <li>Extruded Heat Sinks</li>
          <li>Window & Door Profile</li>
          <li>T Slot Aluminum System</li>
          <li>Solar Mounting Structure</li>
        </ul>
      </Column>

      {/* Capabilities */}
      <Column>
        <h3>Capabilities</h3>
        <Line/>
        <ul>
          <li>Design</li>
          <li>Anodizing</li>
          <li>Powder Coating</li>
          <li>Aluminum Fabrication</li>
          <li>Assembly</li>
        </ul>
      </Column>

      {/* Latest Blog */}
      <Column>
        <h3>Latest Blog</h3>
        <Line/>
        <ul>
          <li>Aluminum Grades Unveiled: Selecting the Perfect Match</li>
          <li>Understanding the Electrical Conductivity of Aluminum</li>
          <li>6061 Aluminum Alloy - Decoding Properties and Uses</li>
        </ul>
      </Column>

      {/* Map and Contact Info */}
      <Column>
        <Map>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.6484743464715!2d119.4858097!3d32.21244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b42a5bbcd1e61b:0x1f80f6634c771142!2szhenjiang+zheshang+hotel!5e0!3m2!1sen!2sus!4v1616165494470!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{border: 'none', borderRadius: '16px'}}
        allowFullScreen=""
        loading="lazy">
      </iframe>
        </Map>
        
      </Column>

      {/* Footer Bottom */}
      
    </FooterContainer>
    <FooterLogo>
    <img src="/Logo_.svg" alt="Wellste Logo" />
    <SocialIcons>
      <a href="#" aria-label="Instagram"><img src="/instagram.svg"></img></a>
      <a href="#" aria-label="Twitter"><img src="/twitter.svg"></img></a>
      <a href="#" aria-label="Telegram"><img src="/telegram.svg"></img></a>
      <a href="#" aria-label="Facebook"><img src="/facebook.svg"></img></a>
      <a href="#" aria-label="phone"><img src="/facebook.svg"></img></a>
      <a href="#" aria-label="email"><img src="/facebook.svg"></img></a>
    </SocialIcons>
    
  </FooterLogo>
    </FooterContainer>
  );
}
