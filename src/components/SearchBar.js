

import React, { useState } from 'react'; 

// Componente de busca que recebe a função onSearch como uma propriedade
const SearchBar = ({ onSearch }) => {
  // Estado local para armazenar o valor digitado pelo usuário
  const [city, setCity] = useState('');

  // Função que é chamada quando o click no btn
  const handleSearch = () => {
    if (city) { // Verifica se o campo não está vazio
      onSearch(city); // Chama a função onSearch passando a cidade
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text" // Tipo de input, para o usuário digitar a cidade
        placeholder="Digite o nome da cidade" // Texto exibido quando o campo está vazio
        value={city} // O valor do campo é controlado pelo estado 'city'
        onChange={(e) => setCity(e.target.value)} // Atualiza o estado 'city' quando o usuário digita algo
      />
      <button onClick={handleSearch}>Buscar</button> {/* Ao clicar no botão, chama a função handleSearch */}
    </div>
  );
};

export default SearchBar;
