import axios from 'axios';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getNews = async (page_number = 1, page_size = 10) => {
  try {
    const url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=us' +
      `&pageSize=${page_size}` +
      `&page=${page_number}` +
      `&apikey=${API_KEY}`;

    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.log(error);
  }
};
