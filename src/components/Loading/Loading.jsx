import styles from './Loading.module.css';
import { useEffect, useState } from 'react';

export default function Loading({ active, delay = 150 }) {
  // アニメーションを滑らかにするためのマウント遅延
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      aria-hidden={!active}
      className={[
        styles.loadingOverlay,
        active ? styles.loadingExit : '',
        mounted ? styles.loadingMounted : '',
      ].join(' ')}
    >
      <div className={styles.loaderWrapper}>
        <div className={styles.ring}>結果集計中</div>
        <div className={styles.subtitle}>スコアを計算しています...</div>
      </div>
    </div>
  );
}
