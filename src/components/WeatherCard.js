import React from 'react'; 

// Componente que exibe as informações sobre o clima, recebido via a propriedade 'weatherData'
const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null; // Se não houver dados de clima, não renderiza nada

  // Desestruturando os dados de clima para facilitar o acesso
  const { main, weather, weather: [{ icon }] } = weatherData;

  return (
    <div className="weather-card">
      {/* Exibe o ícone do clima */}
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`} // A URL do ícone de clima com base no 'icon' retornado pela API
        alt={weather[0].description} // Descrição do clima para o alt(icon)
      />
      {/* Exibe a descrição do clima */}
      <h2>{weather[0].description}</h2>
      {/* Exibe a temperatura em Celsius */}
      <p>Temperatura: {main.temp}°C</p>
      {/* Exibe a umidade */}
      <p>Umidade: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
