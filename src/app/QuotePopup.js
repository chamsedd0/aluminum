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

  /* Style for select elements */
select {
  width: 100%;
  padding: 10px 20px;
  margin: 8px 0;
  border-radius: 100px; /* Rounded corners */
  font-size: 14px;
  background-color: #fff; /* White background */
  box-sizing: border-box; /* Ensures padding doesn't affect width */
  appearance: none; /* Removes default dropdown appearance */
  cursor: pointer; /* Pointer cursor on hover */
  -webkit-appearance: none; /* Remove default styling in Safari */
  -moz-appearance: none; /* Remove default styling in Firefox */
}

/* Optional: Style the dropdown arrow */
select::-ms-expand {
  display: none; /* Removes default dropdown arrow in Internet Explorer */
}

/* Focus effect */
select:focus {
  border-color: #0056b3; /* Blue border on focus */
  outline: none; /* Removes the default outline */
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
  background-color: #F4880C;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0px 20px;
  height: 46px;
  min-width: 200px;

  &:hover {
    background-color: #E7810D;
  }

  @media (max-width: 768px) {
    padding: 0px 20px;
    height: 50px;
    font-size: 12px;
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '',
    mesurements: '',
    message: '',
    subscribe: false,
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
  
    try {
      
  
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({ name: '', email: '', message: '', subscribe: false, mesurements: '', quantity: '', company: '' });
      } else {
        setStatus('Failed to send email.');
      }
    } catch (error) {
      console.error(error);
      setStatus('An error occurred.');
    }
  };
  

  return (
    <Overlay isOpen={isOpen} onClick={() => onClose(false)}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton src='/close.svg' onClick={() => onClose(false)}></CloseButton>
        <FormTitle>Get quotes now!</FormTitle>
        <Form onSubmit={handleSubmit}>
          <div className='smaller'>
            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <Input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              required
            />
          <Textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></Textarea>
          <div className='smaller'>
            <select
              type="text"
              name="quantity"
              placeholder="Quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
            >
              <option value="">Select Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="1">6</option>
              <option value="2">7</option>
              <option value="3">8</option>
              <option value="4">9</option>
              <option value="5">10</option>
            </select>
            <select
              type="text"
              name="mesurements"
              placeholder="Critical Mesurements"
              value={formData.mesurements}
              onChange={handleChange}
              required
              >
                <option value="">Select Measurements</option>
                <option value="1x2">1x2</option>
                <option value="2x5">2x5</option>
                <option value="3x2">3x2</option>
                <option value="4x1">4x1</option>
              </select>
          </div>
          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            <label htmlFor="subscribe">Subscribe to our newsletter</label>
          </CheckboxContainer>
          <CallToAction type="submit">Get Quotes now</CallToAction>
          <p>{status}</p>
        </Form>
      </PopupContainer>
    </Overlay>
  );
}
