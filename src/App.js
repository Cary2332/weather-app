
import React, { useState } from 'react';
import { getWeather } from './services/weatherService';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './styles/App.css';
  

const App = () => {
  // Definindo o estado para armazenar os dados do clima
  const [weatherData, setWeatherData] = useState(null);

  // Função chamada quando o usuário pesquisa por uma cidade
  const handleSearch = async (city) => {
    // Chama a função getWeather para obter os dados do clima
    const data = await getWeather(city);
    setWeatherData(data); // Atualiza o estado com os dados obtidos
  };


  return (
    <div className="app">
      <h1>Previsão do Tempo</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weatherData={weatherData?.main ? weatherData : null} />
    </div>
  );
};

export default App;
