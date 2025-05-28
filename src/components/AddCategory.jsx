import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');
  const [gifLimit, setGifLimit] = useState(10); // Límite por defecto

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onLimitChange = ({ target }) => {
    setGifLimit(Number(target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1 || gifLimit <= 0) return;

    onNewCategory(inputValue.trim(), gifLimit);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={gifLimit}
        onChange={onLimitChange}
        min="1"
        max="50"
      />
    </form>
  );
};
