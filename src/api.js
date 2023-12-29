import axios from "axios";

axios.defaults.baseURL = 'http://localhost:81/portfolio_api/public/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');


const tokenService = {
  async refreshToken() {
    try {
      // Realiza una solicitud al servidor para obtener un nuevo token de acceso.
      const response = await axios.post('refresh');

      // Almacena el nuevo token de acceso en localStorage o Vuex.
      const newAccessToken = response.data.access_token;
      localStorage.setItem('access_token', newAccessToken);

      return newAccessToken;
    } catch (error) {
      // Maneja errores de renovación de tokens aquí.
      throw error;
    }
  },
};
