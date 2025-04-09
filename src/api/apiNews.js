import axios from 'axios';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const createUrl = ({ page_number, page_size, category }) => {
  if (category === 'all')
    return (
      'https://newsapi.org/v2/top-headlines?' +
      'country=us' +
      `&pageSize=${page_size}` +
      `&page=${page_number}` +
      `&apikey=${API_KEY}`
    );
  return (
    'https://newsapi.org/v2/everything?' +
    `q=${category}` +
    `&pageSize=${page_size}` +
    `&page=${page_number}` +
    `&apikey=${API_KEY}`
  );
};

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category = 'all',
}) => {
  try {
    const url = createUrl({
      page_number,
      page_size,
      category,
    });

    const response = await axios.get(url);

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  return [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];
};
