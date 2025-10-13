import { Link } from 'react-router-dom';
import { ROUTES } from '../const';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>🎯 クイズチャレンジ</h1>
        <p className={styles.subtitle}>
          あなたの知識を試してみましょう！
          <br />
          クイズに挑戦してください。
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>📚</span>
            <span>幅広いジャンル</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>⏱️</span>
            <span>気軽に楽しめる</span>
          </div>
          <div className={styles.feature}>
            <span className={styles.featureIcon}>🏆</span>
            <span>スコア表示</span>
          </div>
        </div>
        <Link to={ROUTES.QUIZ} className={styles.startButton}>
          🚀 クイズを始める
        </Link>
      </div>
    </div>
  );
}
