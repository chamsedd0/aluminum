import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function FactorySection() {
  const sections = [
    {
      title: 'Mold Design',
      path: '/factoryPics/factoryPic1.png'
    },
    {
      title: '1100T Extrusion Line',
      path: '/factoryPics/factoryPic2.png'
    },
    {
      title: '3600T Extrusion Line', 
      path: '/factoryPics/factoryPic3.png'
    },
    {
      title: 'Aluminum Extrusions',
      path: '/factoryPics/factoryPic4.png'
    },
    {
      title: 'Powder Coating Section',
      path: '/factoryPics/factoryPic5.png'
    },
    {
      title: 'Sand Blasting Section',
      path: '/factoryPics/factoryPic6.png'
    },
    {
      title: 'Punching Machines',
      path: '/factoryPics/factoryPic3.png'
    }
  ];

  return (
    <SectionContainer>
      <Title>Behind the scenes at our factory</Title>

      <SwiperContainer>
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
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
         
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <Card style={{
              backgroundImage: `url(${section.path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              objectFit: 'cover'
            }}>
              {section.title}
            </Card>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        </Swiper>
      </SwiperContainer>

      <Container>
        <LongCard style={{
          backgroundImage: `url('/factoryPics/factoryPic2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit: 'cover'
        }}>
          Vertical Powder Coating Section
        </LongCard>
        <LongCard style={{
          backgroundImage: `url('/factoryPics/factoryPic5.png')`,
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          objectFit: 'cover'
        }}>
          Anodizing Line
        </LongCard>
      </Container>

    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  padding: 40px 70px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #0056B3;
  margin-bottom: 50px;
  margin-top: 24px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 1040px) {
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }
`;

const LongCard = styled.div`
  height: 320px;
  width: calc(50% - 15px);
  border-radius: 16px;
  gap: 30px;
  background-color: gray;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: end;
  justify-content: start;
  font-size: 18px;
  padding: 50px 30px;

  @media (max-width: 1040px) {
    height: 200px;
    gap: 30px;
    width: 100%;
  }
`;

const SwiperContainer = styled.div`
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

const Card = styled.div`
  background-color: gray;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: end;
  justify-content: start;
  font-size: 18px;
  padding: 50px 30px;
  height: 320px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
