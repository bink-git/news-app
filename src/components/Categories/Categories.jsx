import { forwardRef } from 'react';
import styles from './styles.module.css';

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    const colors = [
      '#ffd0e0',
      '#eebec3',
      '#eed4db',
      '#dac7eb',
      '#bcd4e9',
      '#d5f3d4',
      '#f7dac6',
    ];
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={!selectedCategory ? styles.active : styles.item}
        >
          All
        </button>
        {categories.map((category, index) => {
          const color = colors[index % colors.length];
          const categoryCap =
            category.charAt(0).toUpperCase() + category.slice(1);
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              style={{
                backgroundColor:
                  selectedCategory === category ? '#e7e7ff' : color,
                color: selectedCategory === category ? '#6b4eff' : 'inherit',
              }}
            >
              {categoryCap}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = 'Categories';
export default Categories;
