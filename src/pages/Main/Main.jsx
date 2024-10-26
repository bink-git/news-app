import NewsHeader from '../../components/NewsHeader/NewsHeader';
import NewsList from '../../components/NewsList/NewsList';
import Pagination from '../../components/Pagination/Pagination';
import Categories from '../../components/Categories/Categories';
import Search from '../../components/Search/Search';

import { getCategories, getNews } from '../../api/apiNews';
import { TOTAL_PAGES, PAGE_SIZE } from '../../constants/constants';

import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilter';

import styles from './styles.module.css';

const Main = () => {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: '',
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dataCategories } = useFetch(getCategories);

  // const fetchNews = async (currentPage) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await getNews({
  //       page_number: currentPage,
  //       page_size: PAGE_SIZE,
  //       category: selectedCategory === 'All' ? null : selectedCategory,
  //       keywords,
  //     });
  //     setNews(response.news);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const fetchCategories = async () => {
  //   try {
  //     const response = await getCategories();
  //     setCategories(['All', ...response.categories]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);

  // useEffect(() => {
  //   fetchNews(currentPage);
  // }, [currentPage, selectedCategory, debouncedKeywords]);

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
    <main className={styles.main}>
      {dataCategories && (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            changeFilters('category', category)
          }
        />
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters('keywords', keywords)}
      />

      <NewsHeader
        isLoading={isLoading}
        item={data && data.news && data.news[0]}
      />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={data?.news} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
        handlePageClick={handlePageClick}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
