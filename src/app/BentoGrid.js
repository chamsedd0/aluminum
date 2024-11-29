// components/BentoGridStyled.js
import styled from "styled-components";

// Styled Components
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 150px;
  gap: 20px;
  padding: 40px 70px;
  max-width: 1400px;
  margin: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  grid-column: ${(props) => props.column || "span 1"};
  grid-row: ${(props) => props.row || "span 1"};
  background-color: ${(props) => props.bgColor || "#f0f0f0"};
  transition: all 0.3s ease;

&:hover {
  transform: scale(1.02);
}
  
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  
`;

const Box = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    h2 {
        font-size: 32px;
        font-weight: 700;
        color: #126BB0;
    }

`

export default function BentoGridStyled() {
  const images = [
    { src: "/customer0.png", column: "span 1", row: "span 2" },
    { src: "/customer1.png", column: "span 3", row: "span 2" },
    { src: "/customer3.png", column: "span 1", row: "span 2" },
    { src: "/customer2.png", column: "span 1", row: "span 1" },
    { src: "/customer4.png", column: "span 2", row: "span 3" },
    { src: "/customer5.png", column: "span 1", row: "span 2" },
    { src: "/customer7.png", column: "span 1", row: "span 1" },
  ];

  return (
    <Box>
        <h2>Customer Visits</h2>
    <GridContainer>
        
        {images.map((image, index) => (
          <Card key={index} column={image.column} row={image.row}>
            <CardImage src={image.src} alt={`Image ${index + 1}`} />
          </Card>
        ))}
      </GridContainer>
    </Box>
  );
}
