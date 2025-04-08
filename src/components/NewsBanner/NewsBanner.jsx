import { formatAuthor } from '../../helpers/formatAuthor';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';
import Image from '../Image/Image';
import styles from './styles.module.css';

const NewsBanner = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.urlToImage} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)}
        {formatAuthor(item.author)}
      </p>
    </div>
  );
};

export default NewsBanner;
