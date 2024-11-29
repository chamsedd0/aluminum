import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ProductsSection({onClose}) {
  return (
    <SectionContainer>
      <div className='first'>
        <div className='text'>
            <Title>Custom Aluminum Extrusions for Any Industry, Anywhere</Title>
            
            <ContentContainer>
                <ListContainer>
                <ListTitle>For Any Industry</ListTitle>
                <List>
                    <ListItem>Automotive Aerospace</ListItem>
                    <ListItem>Construction Electronics</ListItem>
                    <ListItem>Renewable Energy</ListItem>
                    <ListItem>Medical Industrial</ListItem>
                    <ListItem>Machinery Transportation</ListItem>
                    <ListItem>Telecommunications</ListItem>
                    <ListItem>Furniture Lighting</ListItem>
                </List>
                </ListContainer>

                <ListContainer>
                <ListTitle>In Any Form</ListTitle>
                <List>
                    <ListItem>Structural Frames and Supports</ListItem>
                    <ListItem>Heat Sinks and Enclosures</ListItem>
                    <ListItem>Panels, Angles, Channels</ListItem>
                    <ListItem>Tubing, Bars, and Rods</ListItem>
                    <ListItem>Custom Profiles and Shapes</ListItem>
                    <ListItem>Architectural Trim</ListItem>
                    <ListItem>Decorative and Functional Casings</ListItem>
                    <ListItem>Railings and Guard Rails</ListItem>
                </List>
                </ListContainer>
            </ContentContainer>
        </div>
        <picture>
          <img src='/listsPic.png' alt='Aluminum products showcase'></img>
        </picture>
      </div>
      
      
      <SliderContainer>
      <h2>Aluminum Extrusion Products</h2>
      <SharedSwiperContainer>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation]}
          breakpoints={{
            868: { slidesPerView: 2 },
            1470: { slidesPerView: 3 },
            1900: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <ProductCard>
              <ProductImage src="/machine1.png" alt="Aluminum Extrusions and Trims" />
              <ProductTitle>Aluminum Extrusions and Trims</ProductTitle>
              <ProductDescription>
                Our custom aluminum extrusions deliver solutions that meet your specific design and functional requirements.
              </ProductDescription>
              <QuoteButton onClick={() => onClose(true)}>Get Quote Now</QuoteButton>
            </ProductCard>
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard>
              <ProductImage src="/machine2.png" alt="Aluminum Extrusions and Trims" />
              <ProductTitle>Aluminum Extrusions and Trims</ProductTitle>
              <ProductDescription>
                Our custom aluminum extrusions deliver solutions that meet your specific design and functional requirements.
              </ProductDescription>
              <QuoteButton onClick={() => onClose(true)}>Get Quote Now</QuoteButton>
            </ProductCard>
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard>
              <ProductImage src="/machine3.png" alt="Aluminum Extrusions and Trims" />
              <ProductTitle>Aluminum Extrusions and Trims</ProductTitle>
              <ProductDescription>
                Our custom aluminum extrusions deliver solutions that meet your specific design and functional requirements.
              </ProductDescription>
              <QuoteButton onClick={() => onClose(true)}>Get Quote Now</QuoteButton>
            </ProductCard>
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard>
              <ProductImage src="/machine1.png" alt="Custom Aluminum Heatsink" />
              <ProductTitle>Custom Aluminum Heatsink</ProductTitle>
              <ProductDescription>
                We use the highest quality aluminum grades with best thermal coefficients for thermal management.
              </ProductDescription>
              <QuoteButton onClick={() => onClose(true)}>Get Quote Now</QuoteButton>
            </ProductCard>
          </SwiperSlide>

          <SwiperSlide>
            <ProductCard>
              <ProductImage src="/machine1.png" alt="Aluminum Profiles" />
              <ProductTitle>Aluminum Profiles</ProductTitle>
              <ProductDescription>
                We offer off-the-shelf standard aluminum profiles and custom profiles including channels, tubes, and more.
              </ProductDescription>
              <QuoteButton onClick={() => onClose(true)}>Get Quote Now</QuoteButton>
            </ProductCard>
          </SwiperSlide>

          {/* Add more SwiperSlides as needed */}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </SharedSwiperContainer>

    </SliderContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: 2rem 70px;
  text-align: center;

  .first {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 70px;
    
    gap: 50px;

    

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
      gap: 40px;
    }

    

    .text {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      gap: 30px;

      @media (max-width: 1024px) {
        width: 100%;
      }
    }
  
    img {
        flex: 0.47;
        max-height: 560px;
        border-radius: 16px;
        background-color: gray;
        object-fit: cover;

        @media (max-width: 1024px) {
          display: none;
        }


    }
  }
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: #126BB0;
  margin-bottom: 2rem;
  max-width: 700px;
  text-align: start;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: start;
  text-align: start;
  justify-content: start;
  gap: 120px;
  
  @media (max-width: 768px) {
    gap: 60px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 40px;
    width: 100%;
  }
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;

    @media (max-width: 600px) {
      width: 100%;
    }
`;

const ListTitle = styled.h2`
    font-size: 24px;
    color: #126BB0;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 22px;
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: inside;
    gap: 10px;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 15px;
    }
`;

const ListItem = styled.li`
    margin-left: 10px;
`;

const SliderContainer = styled.div`
  text-align: center;
  position: relative;
  background-color: #126BB0;
  border-radius: 16px;
  padding: 40px 35px;
  width: 100%;

  h2 {
    font-size: 24px;
    color: white;
    margin-bottom: 20px;
  }
`;

const SharedSwiperContainer = styled.div`
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: white;
    background: rgba(0,0,0,0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;

    opacity: 0.5;
    transition: all 0.3s ease;

    &:hover {
      opacity: 1;
    }
    
    &::after {
      font-size: 20px;
    }
  }
`;

const ProductCard = styled.div`
  margin: 40px 0px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  height: 440px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 15px;
`;

const ProductImage = styled.img`
  max-width: 200px;
  height: auto;
`;

const ProductTitle = styled.h3`
  color: #383838;
  font-size: 22px;
  max-width: 75%;
`;

const ProductDescription = styled.p`
  color: #383838;
  font-size: 16px;
  max-width: 90%;
  font-weight: 600;
`;

const QuoteButton = styled.button`
  background-color: #126BB0;
  color: white;
  padding: 0px 30px;
  font-size: 12px;
  font-weight: 500;
  border: none;
  border-radius: 100px;
  min-height: 40px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1061a0;
  }
`;
