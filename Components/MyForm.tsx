import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Post } from '@/lib/Postlinks';
import GenerateUuid from '@/lib/getUuid';

const MyForm: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

try {
      const response = await Post(GenerateUuid(), inputValue);

      console.log('Form submitted with input value: ' + response);
      //open a model instead of navigating to the history
      router.push('/History');
    } catch (error) {

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
