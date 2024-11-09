import { formatTimeAgo } from '../../helpers/formatTimeAgo';

import Image from '../Image/Image';
import styles from './styles.module.css';

const NewsHeader = ({ item }) => {
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(new Date(item.published))} by {item.author}
      </p>
    </div>
  );
};

export default NewsHeader;
