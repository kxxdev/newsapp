import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';
import NewsList from '../../components/NewsList/NewsList';
import Skeleton from '../../components/Skeleton/Skeleton';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { PAGE_SIZE } from '../../constants/constants';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import LatestNews from '../../components/LatestNews.jsx/LatestNews';
import NewsByFilters from '../../components/NewsByFilters/NewsByFilters';

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: 'all',
    keywords: '',
  });

  const [totalPages, setTotalPages] = useState(1);

  const debouncedKeywords = useDebounce(filters.keywords, 1000);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  useEffect(() => {
    if (data?.totalResults != null) {
      const total = data.totalResults;
      const pages = Math.ceil(total / PAGE_SIZE);
      setTotalPages(pages);
    }
  }, [data]);

  return (
    <main className={styles.main}>
      <LatestNews isLoading={isLoading} banners={data && data.articles} />

      <NewsByFilters
        news={data?.articles}
        isLoading={isLoading}
        filters={filters}
        changeFilter={changeFilter}
        totalPages={totalPages}
      />
    </main>
  );
};

export default Main;
