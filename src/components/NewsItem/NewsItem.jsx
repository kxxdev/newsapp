import { formatAuthor } from '../../helpers/formatAuthor';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import styles from './styles.module.css';

const NewsItem = ({ item }) => {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.urlToImage})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.publishedAt)}
          {formatAuthor(item.author)}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
