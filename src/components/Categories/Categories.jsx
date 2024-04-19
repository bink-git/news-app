import styles from './styles.module.css';

const Categories = ({ categories, setSelectedCategory, selectedCategory }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        const categoryCap =
          category.charAt(0).toUpperCase() + category.slice(1);
        return (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={
              selectedCategory === category ? styles.active : styles.item
            }
          >
            {categoryCap}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
