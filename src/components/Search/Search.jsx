import styles from './styles.module.css';

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        onChange={(e) => setKeywords(e.target.value)}
        value={keywords}
        placeholder="Javascript"
      />
    </div>
  );
};

export default Search;
