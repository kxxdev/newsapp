import { forwardRef } from 'react';
import styles from './styles.module.css';

const Categories = forwardRef(
  ({ categories, setSelectedCategory, selectedCategory }, ref) => {
    return (
      <div ref={ref} className={styles.categories}>
        {categories.map((category) => {
          return (
            <button
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? styles.active : styles.item
              }
              key={category}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
);

Categories.displayName = 'Categories';

export default Categories;
