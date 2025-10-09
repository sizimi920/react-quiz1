import styles from './Display.module.css';

export default function Display({ children, className = '' }) {
  return <div className={`${styles.display} ${className}`}>{children}</div>;
}
