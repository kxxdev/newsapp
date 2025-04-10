import Categories from '../Categories/Categories';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import styles from './styles.module.css';

const NewsByFilters = ({
  filters,
  changeFilter,
  isLoading,
  news,
  totalPages,
}) => {
  const handleNextPage = () => {
    if (filters.page_number < totalPages) {
      changeFilter('page_number', filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilter('page_number', filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <Pagination
        totalPages={totalPages}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        totalPages={totalPages}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        handleNextPage={handleNextPage}
      />
    </section>
  );
};

export default NewsByFilters;
