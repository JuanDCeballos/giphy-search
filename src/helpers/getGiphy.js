export const getGiphy = async (query) => {
  const API_KEY = 'o4KYYBUOLuahwKCBoSCW66ggHzhK5YRp';
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&limit=6`;

  const response = await fetch(url, {
    mode: 'cors',
  });
  const { data } = await response.json();

  return data;
};
