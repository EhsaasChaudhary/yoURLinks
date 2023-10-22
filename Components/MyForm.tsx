'use client'

import { useState } from 'react';
import { postData } from '@/lib/Postlinks';
import GenerateUuid from '@/lib/GetUuid';

const MyForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

try {
      const response = await postData(GenerateUuid(), inputValue);

      console.log('Form submitted with input value: ' + response);
      //open a model component here instead of navigating to the history

      
    } catch (error) {
        console.error("An error occurred:", error);
        throw error; 
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter something"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
