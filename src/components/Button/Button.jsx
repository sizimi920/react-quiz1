import styles from './Button.module.css';

export default function Button({
  children,
  onClick,
  disabled = false,
  className = '',
}) {
  return (
    <button
      className={`${styles.button} ${className} ${
        disabled ? styles.disabled : ''
      }`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.buttonInner}>{children}</span>
    </button>
  );
}
