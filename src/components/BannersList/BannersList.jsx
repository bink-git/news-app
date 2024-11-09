import withSkeleton from '../../helpers/hocs/withSkeleton';
import NewsHeader from '../NewsHeader/NewsHeader';
import styles from './styles.module.css';

const BannersList = ({ banners }) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsHeader key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, 'banner', 10, 'row');

export default BannersListWithSkeleton;
