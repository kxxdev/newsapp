import BannersList from '../BannersList/BannersList';
import styles from './styles.module.css';

const LatestNews = ({ banners, isLoading }) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading}></BannersList>
    </section>
  );
};

export default LatestNews;
