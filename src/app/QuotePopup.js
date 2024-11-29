// components/QuotePopup.js
import styled from 'styled-components';
import { useState } from 'react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const PopupContainer = styled.div`
  background-color: #126BB0;
  position: relative;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  max-width: 600px;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
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

`;

const Checkbox = styled.input`
  margin-right: 10px;
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


const CloseButton = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  width: 18px;
`;

export default function QuotePopup({ isOpen, onClose }) {
  return (
    <Overlay isOpen={isOpen} onClick={() => onClose(false)}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton src='/close.svg' onClick={() => onClose(false)}></CloseButton>
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
    </Overlay>
  );
}
