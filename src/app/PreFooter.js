// components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url('/bgpicfooter.png');
  padding: 40px 150px;
  color: #fff;

  @media (max-width: 1470px) {
    padding: 40px 70px;
  }

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;

  img {
    max-width: 100%;
  }

  @media (max-width: 1470px) {
      transform: scale(0.8);
  }
`;


const Subtitle = styled.p`
  font-size: 42px;
  text-align: center;
  font-weight: 600;

  
`;

const PopupContainer = styled.div`

  position: relative;
  padding: 10px 0px;
  border-radius: 16px;
  width: 100%;
  max-width: 500px;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  transition: all 0.3s ease;

  @media (max-width: 1470px) {
      transform: scale(0.8);
  }
`;

const FormTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 16px;

  .smaller {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 10px 20px;
  border-radius: 100px;
  border: none;
  font-size: 14px;
  width: 100%;
  outline: none;
`;

const Textarea = styled.textarea`
  padding: 14px 20px;
  border-radius: 24px;
  border: none;
  font-size: 16px;
  outline: none;
  resize: none;
  min-height: 100px;
  width: 100%;

`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  font-size: 14px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  border: none;
  outline: none;
`;

const CallToAction = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #126BB0;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0px 20px;
  height: 46px;
  min-width: 200px;

  &:hover {
    background-color: #1061a0;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
    height: 50px;
    font-size: 12px;
  }
`;

const CallToAction2 = styled(CallToAction)`
  background-color: #F4880C;

  &:hover {
    background-color: #db7909;
  }
`;





export default function PreFooter() {
  return (
    <FooterContainer>
      <LeftSection>
        <img src='/logo2.svg'></img>
        <Subtitle>Get your custom aluminum extrusion quotes</Subtitle>
      </LeftSection>
      <PopupContainer>
        <FormTitle>Get quotes now!</FormTitle>
        <Form>
          <div className='smaller'>
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <Input type="text" placeholder="Company Name"></Input>
          <Textarea placeholder="Please specify alloy and temper" />
          <Input type="number" placeholder="Quantity" />
          <Input type="text" placeholder="Critical Dimensions" />
          <CheckboxContainer>
            <Checkbox type="checkbox"/>
            <label>I would like to receive Wellste catalog on my email</label>
          </CheckboxContainer>
          <CallToAction2 type='submit' onClick={(e) => e.preventDefault()}>Get Quote Now</CallToAction2>
          </Form>
      </PopupContainer>
    </FooterContainer>
  );
}
