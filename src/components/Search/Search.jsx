import styles from './styles.module.css';

const Search = ({ keywords, setKeywords, selectedCategory }) => {
  return (
    <div className={selectedCategory != 'all' ? styles.hidden : styles.search}>
      <input
        type="text"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        placeholder="Javascript"
        className={styles.input}
      />
    </div>
  );
};

export default Search;
