import styles from './Button.module.css';

// 汎用Button。children内でアイコンや装飾spanを先頭/末尾に置くケースを想定し、
// 内部をflexコンテナ化し衝突を防ぐ。
export default function Button({
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
  ariaLabel,
}) {
  return (
    <button
      className={`${styles.button} ${className} ${
        disabled ? styles.disabled : ''
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      <span className={styles.buttonInnerWrapper}>{children}</span>
    </button>
  );
}
