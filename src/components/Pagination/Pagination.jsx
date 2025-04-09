import styles from './styles.module.css';

const getPagesButtons = ({ currentPage, totalPages, handlePageClick }) => {
  const startPageNumber = currentPage <= 5 ? 1 : currentPage - 4;
  const endPageNumber =
    currentPage < 5
      ? 11
      : currentPage + 6 <= totalPages
      ? currentPage + 6
      : totalPages;
  const paginArray = [];
  for (let i = startPageNumber; i < endPageNumber; i++) {
    paginArray.push(
      <button
        onClick={() => handlePageClick(i)}
        key={i}
        className={styles.pageNumber}
        disabled={i === currentPage}
      >
        {i}
      </button>
    );
  }

  return paginArray;
};

const Pagination = ({
  totalPages,
  currentPage,
  handlePreviousPage,
  handlePageClick,
  handleNextPage,
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currentPage <= 1}
        onClick={handlePreviousPage}
        className={styles.arrow}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {getPagesButtons({
          currentPage: currentPage,
          totalPages: totalPages,
          handlePageClick: handlePageClick,
        })}
      </div>

      <button
        disabled={currentPage >= totalPages}
        onClick={handleNextPage}
        className={styles.arrow}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
