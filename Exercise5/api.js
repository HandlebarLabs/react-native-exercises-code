const getRemoteData = (url) => {
  return fetch(url)
    .then(response => response.json())
}

export const getPeople = () => {
  const url = 'https://swapi.co/api/people';
  return getRemoteData(url);
};
