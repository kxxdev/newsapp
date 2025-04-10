import axios from 'axios';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getNews = async ({
  page_number = 1,
  page_size = 10,
  category = 'all',
  keywords = null,
}) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
