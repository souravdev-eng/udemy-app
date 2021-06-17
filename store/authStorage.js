import * as SecureStore from 'expo-secure-store';

const key = 'authToken';

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(authToken));
  } catch (error) {
    console.log('Getting error on storing the token', error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Getting error on getting the token', error);
  }
};

export default {
  storeToken,
  getToken,
};
