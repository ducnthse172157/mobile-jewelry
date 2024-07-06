import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://baitapdeploy-production.up.railway.app/staffsRouter';

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/loginWithJWT`, {
        username,
        password,
      });

      console.log('Login API Response:', response.data);

      if (response.data.success) {
        const { accessToken, refreshToken, role } = response.data;
        // Store tokens and role in AsyncStorage
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('refreshToken', refreshToken);
        await AsyncStorage.setItem('role', role);

        // Return tokens and role along with success status
        return {
          success: true,
          accessToken,
          refreshToken,
          role,
        };
      } else {
        return { success: false, message: response.data.message };
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  refreshAccessToken: async () => {
    try {
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await axios.post(`${API_URL}/refreshToken`, {
        refreshToken,
      });

      if (response.data.success) {
        const { accessToken } = response.data;
        await AsyncStorage.setItem('accessToken', accessToken);
        return accessToken;
      } else {
        throw new Error('Token refresh failed');
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw error;
    }
  },
};

export default AuthService;
