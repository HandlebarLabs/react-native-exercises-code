import { AsyncStorage, NetInfo } from 'react-native';

const getLocalData = (url) => {
  return AsyncStorage.getItem(url)
    .then(data => {
      if (data !== null) {
        return JSON.parse(data);
      } else {
        return [];
      }
    })
};

const saveData = (url, data) => {
  AsyncStorage.setItem(url, JSON.stringify(data));
};

const getRemoteData = (url) => {
  return fetch(url)
    .then(response => response.json())
}

export const getPeople = () => {
  const url = 'https://swapi.co/api/people';
  // TODO: This is broken on iOS https://facebook.github.io/react-native/docs/next/netinfo.html
  return NetInfo.isConnected.fetch()
    .then((isConnected) => {
      if (!isConnected) {
        return getLocalData(url);
      }

      return getRemoteData(url);
    })
    .then(data => {
      console.log('data', data);
      return data;
    })
    .then((data) => {
      saveData(url, data);
      return data;
    })
};
