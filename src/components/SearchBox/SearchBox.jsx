import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={styles.container}>
      <p className={styles.label}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
