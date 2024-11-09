import { TOTAL_PAGES } from '../../constants/constants';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import styles from './styles.module.css';

const NewsByFilters = ({ filters, changeFilters, news, isLoading }) => {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilters('page_number', filters.page_number + 1);
    }
  };

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilters('page_number', filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilters('page_number', pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />
    </section>
  );
};

export default NewsByFilters;
