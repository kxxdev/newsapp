import axios from 'axios';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async () => {
  try {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us' +
      `&apikey=${API_KEY}`;

    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.log(error);
  }
};
