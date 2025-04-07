
import axios from 'axios';


// Definindo a chave da API
const API_KEY = '397658a2eb688bfcaa1faed7a3588152';  


// Definindo a URL base da API para a requisição
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// Função que faz a requisição para a API com o nome da cidade
export const getWeather = async (city) => {
  try {
    
    // Fazendo a requisição GET para a API
    const response = await axios.get(API_URL, {
      params: {
        q: city, // Cidade que o usuário deseja buscar
        appid: '397658a2eb688bfcaa1faed7a3588152',
        units: 'metric', // Definindo as unidades de temperatura como Celsius
        lang: 'pt', 
      },
    });
    
    // Retorna os dados da API, caso der certo 
    return response.data; 
} catch (error) {
    // Caso haja um erro na requisição, imprime o erro no console e retorna null
    console.error('Erro ao obter dados da API:', error);
    return null; // Retorna null para que possamos tratar o erro em outro lugar
  }
};
 
 
