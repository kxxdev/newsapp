import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getCategories, getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCatogory, setSelectedCateogory] = useState('all');
  const [news, setNews] = useState([]);
  const pageSize = 11;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const response = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCatogory,
      });
      setNews(response.data.articles);
      setTotalPages(Math.floor(response.data.totalResults / pageSize) + 1);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(['all', ...response]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCatogory]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        setSelectedCategory={setSelectedCateogory}
        selectedCategory={selectedCatogory}
      />

      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton type={'banner'} count={1} />
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton type={'item'} count={10} />
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
      />
    </main>
  );
};

export default Main;
